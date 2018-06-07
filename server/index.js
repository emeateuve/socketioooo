var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

/* EJEMPLO ALFONSO */
/* app.post('/action', function(req, res){
  consulta mysql si está ok

  res.sendFile(__dirname + '/index.html');
}); */
/*****************************************/

/* app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
}); */

var loggedUsers = [];
var chatUsers = [];

var loggedUser = false;

var charactersArray = [
    {
        name: 'Paul',
        hair: 'dark',
        eyes: 'brown',
        skin: 'black',
        gender: 'male',
        beard: true,
        image: './assets/Paul.png',
        display: true
    },
    {
        name: 'Jody',
        hair: 'blonde',
        eyes: 'blue',
        skin: 'white',
        gender: 'female',
        beard: false,
        image: './assets/Jody.png',
        display: true
    },
    {
        name: 'Marcellus',
        hair: 'bold',
        eyes: 'brown',
        skin: 'black',
        gender: 'male',
        beard: false,
        image: './assets/Marcellus.png',
        display: true
    },
    {
        name: 'Jimmie',
        hair: 'brown',
        eyes: 'brown',
        skin: 'white',
        gender: 'male',
        beard: false,
        image: './assets/Jimmie.png',
        display: true
    },
    {
        name: 'Esmeralda',
        hair: 'brown',
        eyes: 'blue',
        skin: 'brown',
        gender: 'female',
        beard: false,
        image: './assets/Esmeralda.png',
        display: true
    },
    {
        name: 'Captain Koons',
        hair: 'dark',
        eyes: 'blue',
        skin: 'white',
        gender: 'male',
        beard: false,
        image: './assets/Captain_Koons.png',
        display: true
    },
    {
        name: 'Jules',
        hair: 'dark',
        eyes: 'brown',
        skin: 'black',
        gender: 'male',
        beard: true,
        image: './assets/Jules.png',
        display: true
    },
    {
        name: 'Buddy',
        hair: 'brown',
        eyes: 'blue',
        skin: 'white',
        gender: 'male',
        beard: false,
        image: './assets/Buddy.png',
        display: true
    },
    {
        name: 'Yolanda',
        hair: 'red',
        eyes: 'brown',
        skin: 'white',
        gender: 'female',
        beard: false,
        image: './assets/Yolanda.png',
        display: true
    },
    {
        name: 'Roger',
        hair: 'blonde',
        eyes: 'brown',
        skin: 'white',
        gender: 'male',
        beard: false,
        image: './assets/Roger.png',
        display: true
    },
    {
        name: 'Fabienne',
        hair: 'dark',
        eyes: 'blue',
        skin: 'white',
        gender: 'female',
        beard: false,
        image: './assets/Fabienne.png',
        display: true
    },
    {
        name: 'Lance',
        hair: 'red',
        eyes: 'blue',
        skin: 'white',
        gender: 'male',
        beard: true,
        image: './assets/Lance.png',
        display: true
    }
];
io.on('connection', function (socket) {
    console.log('Connected to the server');
    socket.on("user-login", function (user) {
        loggedUser = false;
        for (let i = 0; i < loggedUsers.length; i++) {
            if (user === loggedUsers[i].username) {
                socket.emit('existing-user', user + ' already exists! Try with another username');
                loggedUser = true;
            }
        }
        if (!loggedUser) {
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
                                console.log(arrayUsersReady)
                                arrayUsersReady[0].guesser = true;
                                arrayUsersReady[1].guesser = false;

                                io.in(socket.jsonUser.room).emit("game-start", {
                                    characters: charactersArray,
                                    usersReady: arrayUsersReady,
                                    randomCard: charactersArray[Math.floor(Math.random() * charactersArray.length)]
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
                                            io.in(socket.jsonUser.room).emit('game-start', {
                                                characters: charactersArray,
                                                usersReady: usersInGame,
                                                randomCard: charactersArray[Math.floor(Math.random() * charactersArray.length)]
                                            });
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
                                            if(socket.adapter.rooms.hasOwnProperty(socket.jsonUser.room)) {
                                                let posGame = socket.adapter.rooms[socket.jsonUser.room].arrayUsersReady.indexOf(socket.jsonUser.username);
                                                socket.adapter.rooms[socket.jsonUser.room].arrayUsersReady.splice(posGame, 1);
                                            }

                                            socket.jsonUser.round = 0;
                                            socket.jsonUser.guesser = false;
                                            socket.jsonUser.room = null;
                                            socket.jsonUser.points = 100;
                                            socket.jsonUser.isReady = false;
                                            socket.jsonUser.usersReady = [];
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
                                            ;
                                        }
                                        ;
                                    }
                                    ;
                                });

                                socket.on('disconnect', function () {
                                    socket.leave(socket.jsonUser.room);
                                    // ARRAY.hasOwnProperty checks if there is a key inside a json. hehe.
                                    if(socket.adapter.rooms.hasOwnProperty(socket.jsonUser.room)){
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


        }
        ;
    });

    socket.on('disconnect', function () {
        io.emit("desconexion");
        console.log('Disconnected from the server')
    })
});


http.listen(3000, function () {
    console.log('listening on *:3000');
});