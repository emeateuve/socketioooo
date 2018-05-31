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
    console.log('a user connected');
    socket.on("user-login", function (user) {
        loggedUser = false;
        for (let i = 0; i < loggedUsers.length; i++) {
            if (user === loggedUsers[i].username) {
                socket.emit('existing-user', user + ' already exists! Try with another username.')
                console.log('El usuario ya existe!');
                loggedUser = true;
            }
        }
        if(!loggedUser){
            socket.jsonUser = {username: user, role: null };
            loggedUsers.push(socket.jsonUser);
            // console.log('Usuarios: ', loggedUsers);
            // console.log('Se ha conectado: ', socket.jsonUser.username);

            socket.emit("successfull-login", {array: loggedUsers, user: socket.jsonUser.username});

            socket.on("conexion-chat", function () {
                chatUsers.push(socket.jsonUser);
                io.emit('connected-chat-user', {message: socket.jsonUser.username + ' is connected.', array: chatUsers});

                socket.on("message", function (chatMessage) {
                    io.emit("new-message", socket.jsonUser.username + ': ' + chatMessage);
                });

                socket.on('disconnect', function () {
                    let posChat = chatUsers.indexOf(socket.jsonUser.username);
                    chatUsers.splice(posChat, 1);
                    io.emit('disconnectedChat', {message: socket.jsonUser.username + ' has disconnect.', array: chatUsers})
                })
            });

            socket.on('usuarioReady', function (user) {

                if(readyUsers.includes(user)){
                    io.emit("userReady", user + ' is ready to rumble!');
                } else {
                    readyUsers.push(user);
                    io.emit("userReady", user + ' is ready to rumble!');
                }

                console.log('Usuarios listos: ', readyUsers);

                socket.on('disconnect', function () {
                    let posReady = readyUsers.indexOf(socket.jsonUser.username);
                    readyUsers.splice(posReady, 1);
                    console.log('Uno menos', readyUsers);
                    io.emit('disconnectedLobby', {message: socket.jsonUser.username + ' has disconnect.', array: readyUsers})
                });

                if (readyUsers.length === 2){
                    /*Si lo envia el servidor solo 1 jugador puede jugar. si lo envia al socket lo pueden hacer los 2*/
                    io.emit("game-start", {characters: charactersArray, usersReady: readyUsers});
                    // readyUsers = [];

                    socket.on('delete-character', function (card, array) {
                        for (let i = 0; i < array.length; i++){
                            if (card === array[i].name){
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

                    socket.on('this-is-the-one', function (card) {
                        console.log('Antes de comprobarlo');
                        if(card === 'Paul'){
                            io.emit('correct-answer', socket.jsonUser.username + ' has guessed who it is!');
                        } else {
                            io.emit('wrong-answer', socket.jsonUser.username + ' WRONG');
                        }
                    });
                }

                socket.on('disconnect', function () {
                    let pos = readyUsers.indexOf(socket.jsonUser.username);
                    readyUsers.splice(pos, 1);
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
    console.log('listening on *:3000', ' desde el servidor');
});