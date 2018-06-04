var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

/* app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
}); */

var loggedUsers = [];
var chatUsers = [];
var readyUsers = [];
var usersInGame = [];

var round = 0;

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

    socket.on("user-login", function (user) {
        loggedUser = false;
        for (let i = 0; i < loggedUsers.length; i++) {
            if (user === loggedUsers[i].username) {
                socket.emit('existing-user', user + ' already exists! Try with another username.')
                loggedUser = true;
            }
        }
        if (!loggedUser) {
            socket.jsonUser = {username: user, room: null, guesser: false, points: 100};
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
                    })
                })
            });

            socket.on('usuarioReady', function (user, room) {
                socket.jsonUser.room = room;
                let gamerJSON = {user: user, room: socket.jsonUser.room, guesser: socket.jsonUser.guesser, points: socket.jsonUser.points}
                if (readyUsers.includes(user)) {
                    io.emit("userReady", {message: user + ' is ready to rumble!', readyUsers: readyUsers});
                } else {
                    readyUsers.push(gamerJSON);
                    io.emit("userReady", {message: user + ' is ready to rumble!', readyUsers: readyUsers});
                    socket.join(socket.jsonUser.room);
                }

                socket.on('disconnect', function () {
                    if (socket.jsonUser.room !== null){
                        socket.leave(socket.jsonUser.room);
                    }
                    let posReady = readyUsers.indexOf(socket.jsonUser.username);
                    readyUsers.splice(posReady, 1);
                    io.emit('disconnectedLobby', {
                        message: socket.jsonUser.username + ' has disconnect.',
                        array: readyUsers
                    })
                });

                socket.on('startTheGameNow', function (arrayUsersReady) {
                    io.in(socket.jsonUser.room).emit('room-message', 'HOLA A LOS USUARIOS DE: ' + socket.jsonUser.room);
                    arrayUsersReady[0].guesser = true;
                    arrayUsersReady[1].guesser = false;

                    io.emit("game-start", {
                        characters: charactersArray,
                        usersReady: arrayUsersReady,
                        randomCard: charactersArray[Math.floor(Math.random() * charactersArray.length)],
                    });
                    readyUsers = [];

                    socket.on('game-message', function (gameMessage) {
                        io.emit('new-game-message', socket.jsonUser.username + ': ' + gameMessage)
                    });
                    socket.on('delete-character', function (card, array) {
                        for (let i = 0; i < array.length; i++) {
                            if (card === array[i].name) {
                                array[i].display = false;
                            }
                        }
                        io.emit('deleted-character', array);
                    });

                    socket.on('quitar-hombres', function (array) {
                        for (let i = 0; i < array.length; i++) {
                            if (array[i].gender === 'male') {
                                array[i].display = false;
                            }
                        }
                        io.emit('hombres-quitados', array)
                    });

                    socket.on('blue-eyes', function (array) {
                        for (let i = 0; i < array.length; i++) {
                            if (array[i].eyes === 'blue') {
                                array[i].display = false;
                            }
                        }
                        io.emit('has-blue-eyes', array)
                    });

                    socket.on('this-is-the-one', function (card, randomCard, usersInGame) {
                        console.log('Antes de cambiar: ', usersInGame);
                        if (card === randomCard.name) {
                            io.emit('correct-answer', socket.jsonUser.username + ' has guessed who it is!');
                        } else {
                            for(let i = 0; i < usersInGame.length; i++){
                                if(usersInGame[i].user === socket.jsonUser.username){
                                    usersInGame[i].points = usersInGame[i].points - 10;
                                    // console.log('Después de cambiar', usersInGame);
                                    io.emit('wrong-answer', usersInGame);
                                }
                            }
                            // usersInGame[socket.jsonUser.username].points = usersInGame[socket.jsonUser.username].points - 10;

                        }
                    });

                    socket.on('disconnect', function () {
                        socket.leave(socket.jsonUser.room);
                    })
                });
            });
        }
    });

    socket.on('disconnect', function () {
        io.emit("desconexion");
        console.log('Desconectado del servidor')
    })
});


http.listen(3000, function () {
    console.log('listening on *:3000');
});