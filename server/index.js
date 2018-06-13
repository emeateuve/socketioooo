var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* ######### MONGODB #########*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin1!@ds155730.mlab.com:55730/guesswhomatv');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'error de conexión: '));
db.once('open', function () {
    console.log('conectado suprimo a la db')
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
    }
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

/* EJEMPLO ALFONSO */
/* app.post('/action', function(req, res){
  consulta mysql si está ok

  res.sendFile(__dirname + '/index.html');
}); */
/*****************************************/

app.use(express.static('public'));

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

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
                console.log('UserResponse: ', userResponse);
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
                                    socket.emit('matrix-error', 'How did you did that?');
                                } else {
                                    var newCharacter = new Character({
                                        name: name,
                                        hair: hair,
                                        eyes: eyes,
                                        skin: skin,
                                        gender: gender,
                                        beard: beard,
                                        image: './assets/Paul.png',
                                        display: true,
                                        createdBy: userResponse._id
                                    });
                                    newCharacter.save();
                                }
                            });

                    } else {
                        socket.emit('existing-character', 'Hola');
                        console.log('Existe ya ese personaje locaso');
                    }
                })
        })
        /* FIND CHARACTERS */

        socket.on('load-user-characters', function () {
            User.findOne({
                username: socket.jsonUser.username
            })
                .exec(function (error, userResponse) {
                    if (userResponse === null) {
                        console.log('No hay usuario cargando')
                    } else {
                        Character.find({
                            createdBy: userResponse._id
                        })
                            .populate('createdBy')
                            .exec(function (error, charResponse) {
                                if (charResponse === null) {
                                    console.log('No se ha podido')
                                } else {
                                    socket.emit('loaded-user-characters', charResponse)
                                }

                            });
                    }
                });
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


http.listen(3000, function () {
    console.log('listening on *:3000');
});