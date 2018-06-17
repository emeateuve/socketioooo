var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 3000;

/* ######### MULTER ######## */
//
//
// var fs = require('fs');
// var path = require('path');
// var multer = require('multer');
// var multerOptions = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, path.join(__dirname, 'customUserImages'));
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.originalname)
//     }
// })
//
// var upload = multer({storage: multerOptions});
//
// app.get('/customUserImages/:name', function (req, res) {
//     var image = path.join(__dirname, 'customUserImages', req.params.name)
// })
//
//
// app.post('/test', function (req, res) {
//     console.log('entra!')
// })
//
// app.post('/customUserImages', upload.single('userImage'), function (req, res) {
//     console.log('entra en el post')
//     var name = req.file.originalname;
//     fs.readFile(path.join(__dirname, 'customUserImages.json'), function (error, image) {
//         if(error){
//             console.log('ERROR: ', error)
//         };
//         var images = JSON.parse(image);
//         images.push({route: name});
//         fs.writeFile(path.join(__dirname, 'customUserImages.json'), JSON.stringify(images), function (error) {
//             if (error){
//                 console.log('ERROR: ', error)
//             }
//             res.sendFile(path.join(__dirname, 'index.html'))
//         })
//     })
// });








/* ######### MONGODB #########*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin1!@ds155730.mlab.com:55730/guesswhomatv');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'error de conexión: '));
db.once('open', function () {
    console.log('Connected to the database')
});

var Schema = mongoose.Schema;

var charactersSchema = mongoose.Schema({
    name: String,
    hair: String,
    eyes: String,
    skin: String,
    gender: String,
    beard: Boolean,
    image: String,
    display: Boolean,
    /*References an User Object*/
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // timeCreated: {
    //     type: Date, default: Date.now
    // }
    timeCreated: String
});

var Character = mongoose.model('Character', charactersSchema);

var userSchema = mongoose.Schema({
    // Mlab creates a new _id by default
    // _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String
});

var User = mongoose.model('User', userSchema);
var emitter = require('events').EventEmitter.prototype._maxListeners = 100;
emitter._maxListeners = 100;
app.use(express.static('public'));
app.use(express.static('node_modules'));

/* EJEMPLO ALFONSO */
/* app.post('/action', function(req, res){
  consulta mysql si está ok

  res.sendFile(__dirname + '/index.html');
}); */
/*****************************************/

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var loggedUsers = [];
var chatUsers = [];

var loggedUser = false;


io.on('connection', function (socket) {
    console.log('Connected to the server');
    socket.emit('back-to-login');

    socket.on('register-user', function (user, password) {
        User.findOne({
            username: user
        })
            .exec(function (error, userRegistered) {
                if (userRegistered === null) {
                    var newUser = new User({
                        username: user,
                        password: password
                    });
                    newUser.save();
                    socket.jsonUser = {
                        username: user,
                        room: null,
                        guesser: false,
                        points: 100,
                        round: 0,
                        isReady: false,
                        usersReady: []
                    };
                    loggedUsers.push(socket.jsonUser);

                    socket.emit("successfull-login", {
                        array: loggedUsers,
                        user: socket.jsonUser.username
                    });

                } else {
                    socket.emit('existing-user', user + ' already exists! Try with another username');
                }
            });
    });

    socket.on("user-login", function (user, password) {
        loggedUser = false;

        User.findOne({
            username: user,
            password: password
        })
        /*ejemplo ordenar*/
        //.sort('username')
        /* ejemplo or*/
        //.or([{username: user}, {password: user}])
            .exec(function (error, userResponse) {
                if (userResponse === null) {
                    socket.emit('existing-user', "Password and User don't match! Try again or register");
                } else {
                    // UPDATE EXAMPLE:
                    // userResponse.username = "paquito"
                    // userResponse.save()
                    socket.jsonUser = {
                        username: user,
                        room: null,
                        guesser: false,
                        points: 100,
                        round: 0,
                        isReady: false,
                        usersReady: []
                    };
                    loggedUsers.push(socket.jsonUser);

                    socket.emit("successfull-login", {
                        array: loggedUsers,
                        user: socket.jsonUser.username
                    });
                }
            });

        socket.on("conexion-chat", function () {
            chatUsers.push(socket.jsonUser);
            io.emit('connected-chat-user', {
                message: socket.jsonUser.username + ' is connected.',
                array: chatUsers
            });

            socket.on("message", function (chatMessage) {
                io.emit("new-message", socket.jsonUser.username + ': ' + chatMessage);
            });

            socket.on('disconnect', function () {
                let posChat = chatUsers.indexOf(socket.jsonUser.username);
                chatUsers.splice(posChat, 1);
                io.emit('disconnectedChat', {
                    message: socket.jsonUser.username + ' has disconnect.',
                    array: chatUsers
                });
            });
        });


        /* NEW CHARACTER CREATION */
        socket.on('new-character', function (name, hair, eyes, skin, gender, beard) {
            Character.findOne({
                name: name
            })
                .exec(function (error, charResponse) {

                    if (charResponse === null) {
                        User.findOne({
                            username: socket.jsonUser.username
                        })
                            .exec(function (error, userResponse) {
                                if (userResponse === null) {
                                    socket.emit('operation-message', 'Your username is corrupted. Try to login again.');
                                } else {
                                    let charToday = new Date();
                                    let charDay = charToday.getDate();
                                    let charMonth = charToday.getMonth();
                                    let charYear = charToday.getFullYear();
                                    let charHour = charToday.getHours();
                                    let charMinutes = charToday.getMinutes();
                                    let charSeconds = charToday.getSeconds();
                                    let currentDate = charDay + '/' + (charMonth + 1) + '/' + charYear + ' ' + charHour + ':' + charMinutes + ':' + charSeconds;

                                    var newCharacter = new Character({
                                        name: name,
                                        hair: hair,
                                        eyes: eyes,
                                        skin: skin,
                                        gender: gender,
                                        beard: beard,
                                        image: './assets/Paul.png',
                                        display: true,
                                        createdBy: userResponse._id,
                                        timeCreated: currentDate.toString()
                                    });
                                    newCharacter.save();
                                    User.findOne({
                                        username: socket.jsonUser.username
                                    })
                                        .exec(function (error, userResponse) {
                                            if (userResponse === null) {
                                                socket.emit('operation-message', 'Cannot find your user. Try to login again.')
                                            } else {
                                                Character.find({
                                                    createdBy: userResponse._id
                                                })
                                                    .populate('createdBy')
                                                    .exec(function (error, updatedCharacters) {
                                                        if (updatedCharacters === null) {
                                                            socket.emit('operation-message', 'Error. Character could not be created.')
                                                        } else {
                                                            socket.emit('updated-user-characters', updatedCharacters);
                                                            socket.emit('operation-message', name + ' was successfully created!')

                                                        }

                                                    });
                                            }
                                        });
                                }
                            });

                    } else {
                        socket.emit('operation-message', name + ' already exists in our database! Try with another name.');
                    }
                })
        });
        /* FIND CHARACTERS */

        socket.on('load-user-characters', function () {
            User.findOne({
                username: socket.jsonUser.username
            })
                .exec(function (error, userResponse) {
                    if (userResponse === null) {
                        socket.emit('operation-message', 'Cannot load your characters. Try to login again.')
                    } else {
                        Character.find({
                            createdBy: userResponse._id
                        })
                            .populate('createdBy')
                            .exec(function (error, charResponse) {
                                if (charResponse === null) {
                                    socket.emit('operation-message', 'Cannot load your characters.')
                                } else {
                                    socket.emit('loaded-user-characters', charResponse)
                                }

                            });
                    }
                });
        });

        /* DELETE USER CHARACTER */

        socket.on('delete-user-character', function (characterName) {
            User.findOne({
                username: socket.jsonUser.username
            })
                .exec(function (error, userResponse) {
                    if (userResponse === null) {
                        socket.emit('operation-message', 'Cannot delete ' + characterName + '. Try login again.')
                    } else {
                        Character.deleteOne({
                            name: characterName
                        })
                            .exec(function (error, charResponse) {
                                if (charResponse === null) {
                                    socket.emit('operation-message', 'Cannot find ' + characterName + '. Try again.');
                                } else {
                                    Character.find({
                                        createdBy: userResponse._id
                                    })
                                        .exec(function (error, updatedCharacters) {
                                            if(updatedCharacters === null){
                                                socket.emit('operation-message', 'Cannot update your characters list. Try again.');
                                            } else {
                                                socket.emit('deleted-user-character', updatedCharacters);
                                                socket.emit('operation-message', 'Character removed successfully!');
                                            }
                                        })
                                }
                            });
                    }
                });
        });

        /* CHANGE USER PASSWORD */
        socket.on('change-user-password', function (oldPass, newPass) {
            User.findOne({
                username: socket.jsonUser.username,
                password: oldPass
            })
                .exec(function (error, userResponse) {
                    if(userResponse === null){
                        socket.emit('operation-message', 'Wrong password. Try again.')
                    } else {
                        userResponse.password = newPass;
                        userResponse.save();
                        socket.emit('operation-message', 'Your password has been changed successfully!')
                    }
                })
        });
        /*  CHANGE USER USERNAME  */
        socket.on('change-user-username', function (username, password, newUsername) {
            User.findOne({
                username: socket.jsonUser.username && username,
                password: password
            })
                .exec(function (error, userResponse) {
                    if(userResponse === null){
                        socket.emit('operation-message', 'Wrong password. Try again.')
                    } else {
                        userResponse.username = newUsername;
                        userResponse.save();
                        socket.jsonUser.username = newUsername;
                        socket.emit('changed-user-username', {newName: socket.jsonUser.username});
                        socket.emit('operation-message', 'Your name has been changed successfully!');

                    }
                })
        });


        socket.on('connected-lobby', function (room) {
            socket.jsonUser.room = room;
            socket.join(socket.jsonUser.room);
            if (io.sockets.adapter.rooms[socket.jsonUser.room].length > 2) {
                socket.emit('lobby-is-full', socket.jsonUser.room);
                socket.leave(socket.jsonUser.room);
            } else {
                io.sockets.adapter.rooms[socket.jsonUser.room].arrayUsersReady = [];
                // You can create new variables in a room.

                socket.on('usuarioReady', function () {
                        let gamerJSON = {
                            user: socket.jsonUser.username,
                            room: socket.jsonUser.room,
                            guesser: socket.jsonUser.guesser,
                            points: socket.jsonUser.points,
                        };

                        if (io.sockets.adapter.rooms[socket.jsonUser.room].arrayUsersReady.length === 0) {
                            io.sockets.adapter.rooms[socket.jsonUser.room].arrayUsersReady.push(gamerJSON);
                            io.in(socket.jsonUser.room).emit('userReady', {
                                message: socket.jsonUser.username + ' is ready to rumble!',
                                readyUsers: io.sockets.adapter.rooms[socket.jsonUser.room].arrayUsersReady,
                                totalRoom: io.sockets.adapter.rooms[socket.jsonUser.room].length
                            });
                        } else {
                            for (let i = 0; i < io.sockets.adapter.rooms[socket.jsonUser.room].arrayUsersReady.length; i++) {
                                if (io.sockets.adapter.rooms[socket.jsonUser.room].arrayUsersReady[i].user === socket.jsonUser.username) {
                                    io.in(socket.jsonUser.room).emit('userReady', {
                                        message: socket.jsonUser.username + ' is ready to rumble!',
                                        readyUsers: io.sockets.adapter.rooms[socket.jsonUser.room].arrayUsersReady,
                                        totalRoom: io.sockets.adapter.rooms[socket.jsonUser.room].length
                                    });
                                } else {
                                    io.sockets.adapter.rooms[socket.jsonUser.room].arrayUsersReady.push(gamerJSON)
                                }
                            }
                        }

                        socket.on('startTheGameNow', function (arrayUsersReady) {
                            arrayUsersReady[0].guesser = true;
                            arrayUsersReady[1].guesser = false;

                            Character.find()
                                .exec(function (error, charactersArray) {
                                    io.in(socket.jsonUser.room).emit("game-start", {
                                        characters: charactersArray,
                                        usersReady: arrayUsersReady,
                                        randomCard: charactersArray[Math.floor(Math.random() * charactersArray.length)]
                                    });
                                });


                            socket.on('game-message', function (gameMessage) {
                                io.in(socket.jsonUser.room).emit('new-game-message', socket.jsonUser.username + ': ' + gameMessage)
                            });
                            socket.on('delete-character', function (card, array) {
                                for (let i = 0; i < array.length; i++) {
                                    if (card === array[i].name) {
                                        array[i].display = false;
                                    }
                                }
                                io.in(socket.jsonUser.room).emit('deleted-character', array);
                            });

                            socket.on('delete-men', function (array) {
                                for (let i = 0; i < array.length; i++) {
                                    if (array[i].gender === 'male') {
                                        array[i].display = false;
                                    }
                                }
                                io.in(socket.jsonUser.room).emit('deleted-men', array)
                            });
                            socket.on('delete-women', function (array) {
                                for (let i = 0; i < array.length; i++) {
                                    if (array[i].gender === 'female') {
                                        array[i].display = false;
                                    }
                                }
                                io.in(socket.jsonUser.room).emit('deleted-women', array)
                            });

                            socket.on('delete-blue-eyes', function (array) {
                                for (let i = 0; i < array.length; i++) {
                                    if (array[i].eyes === 'blue') {
                                        array[i].display = false;
                                    }
                                }
                                io.in(socket.jsonUser.room).emit('deleted-blue-eyes', array);
                            });

                            socket.on('delete-brown-eyes', function (array) {
                                for (let i = 0; i < array.length; i++) {
                                    if (array[i].eyes === 'brown') {
                                        array[i].display = false;
                                    }
                                }
                                io.in(socket.jsonUser.room).emit('deleted-brown-eyes', array);
                            });

                            socket.on('this-is-the-one', function (card, randomCard, usersInGame) {
                                if (card === randomCard.name) {
                                    io.in(socket.jsonUser.room).emit('correct-answer', '[SERVER]: ' + socket.jsonUser.username + ' has guessed who it is!');

                                    if (socket.jsonUser.round < 3) {
                                        for (let i = 0; i < usersInGame.length; i++) {
                                            socket.jsonUser.points = socket.jsonUser.points + 50;
                                            usersInGame[i].points = usersInGame[i].points + 50;
                                            usersInGame[i].guesser = !usersInGame[i].guesser;
                                            usersInGame[i].round++;
                                            socket.jsonUser.round++;
                                        }
                                        Character.find()
                                            .exec(function (error, charactersArray) {
                                                io.in(socket.jsonUser.room).emit('game-start', {
                                                    characters: charactersArray,
                                                    usersReady: usersInGame,
                                                    randomCard: charactersArray[Math.floor(Math.random() * charactersArray.length)]
                                                });
                                            })

                                    } else {
                                        let winner;

                                        if (usersInGame[0].points > usersInGame[1].points) {
                                            winner = usersInGame[0];
                                            io.in(socket.jsonUser.room).emit('game-end', {
                                                array: usersInGame,
                                                winner: winner
                                            })
                                        } else if (usersInGame[0].points === usersInGame[1].points) {
                                            io.in(socket.jsonUser.room).emit('game-end-tied', usersInGame);
                                        } else {
                                            winner = usersInGame[1];
                                            io.in(socket.jsonUser.room).emit('game-end', {
                                                array: usersInGame,
                                                winner: winner
                                            });
                                        }
                                    }
                                    socket.on('back-to-menu', function () {
                                        socket.leave(socket.jsonUser.room);
                                        if (socket.adapter.rooms.hasOwnProperty(socket.jsonUser.room)) {
                                            let posGame = socket.adapter.rooms[socket.jsonUser.room].arrayUsersReady.indexOf(socket.jsonUser.username);
                                            socket.adapter.rooms[socket.jsonUser.room].arrayUsersReady.splice(posGame, 1);
                                        }

                                        socket.jsonUser.round = 0;
                                        socket.jsonUser.guesser = false;
                                        socket.jsonUser.room = null;
                                        socket.jsonUser.points = 100;
                                        socket.jsonUser.isReady = false;
                                        socket.jsonUser.usersReady = [];

                                        socket.removeAllListeners('usuarioReady');
                                        socket.removeAllListeners('startTheGameNow');
                                        socket.removeAllListeners('game-message');
                                        socket.removeAllListeners('delete-character');
                                        socket.removeAllListeners('delete-men');
                                        socket.removeAllListeners('delete-women');
                                        socket.removeAllListeners('delete-blue-eyes');
                                        socket.removeAllListeners('delete-brown-eyes');
                                        socket.removeAllListeners('this-is-the-one');
                                        socket.removeAllListeners('back-to-menu');
                                    })
                                } else {
                                    for (let i = 0; i < usersInGame.length; i++) {
                                        if (usersInGame[i].user === socket.jsonUser.username) {
                                            usersInGame[i].points = usersInGame[i].points - 10;
                                            io.in(socket.jsonUser.room).emit('wrong-answer', {
                                                array: usersInGame,
                                                message: '[SERVER]: ' + socket.jsonUser.username + ' has failed!, ' + card + ' is not the correct card.'
                                            });
                                        }
                                    }
                                }
                            });

                            socket.on('disconnect', function () {
                                socket.leave(socket.jsonUser.room);
                                // ARRAY.hasOwnProperty checks if there is a key inside a json. hehe.
                                if (socket.adapter.rooms.hasOwnProperty(socket.jsonUser.room)) {
                                    let posGame = socket.adapter.rooms[socket.jsonUser.room].arrayUsersReady.indexOf(socket.jsonUser.username);
                                    socket.adapter.rooms[socket.jsonUser.room].arrayUsersReady.splice(posGame, 1);
                                    io.in(socket.jsonUser.room).emit('disconnected-game', {
                                        message: '[SERVER]: ' + socket.jsonUser.username + ' has left the game.',
                                        usersInRoom: socket.adapter.rooms[socket.jsonUser.room].length,
                                        array: socket.adapter.rooms[socket.jsonUser.room].arrayUsersReady
                                    });
                                }
                            });
                        });
                    }
                );
            }

        })


    });

    socket.on('disconnect', function () {
        io.emit("desconexion");
        console.log('Disconnected from the server')
    })
});


http.listen(port, function () {
    console.log('listening on ' + port);
});