var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

/* app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
}); */

var loggedUsers = [];
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
                console.log('El usuario ya existe!');
                loggedUser = true;
            }
        }
        if(!loggedUser){
            socket.jsonUser = {username: user};
            loggedUsers.push(socket.jsonUser);
            console.log('Usuarios: ', loggedUsers);
            console.log('Se ha conectado: ', socket.jsonUser.username);

            socket.on("conexion-chat", function () {
                console.log('Se ha conectado al chat un cliente');
                socket.on("message", function (mensaje) {
                    console.log("recibido mensaje: " + mensaje);
                    io.emit("message", mensaje);
                });
            });

            socket.on('usuarioReady', function (mensaje) {
                // socket.broadcast.emit("userReady", charactersArray);
                io.emit("userReady", charactersArray)
            });
            socket.on('quitar-hombres', function (array) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i].gender === 'male') {
                        array[i].display = false;
                    }
                }
                io.emit('hombres-quitados', array)
            });
            // console.log('Antes del successfull',  {array: loggedUsers, user: socket.jsonUser.username});
            socket.emit("successfull-login", {array: loggedUsers, user: socket.jsonUser.username});
        }
    });

    socket.on('disconnect', function () {
        io.emit("desconexion");
        console.log('Desconexion desde servidor')
    })
});


http.listen(3000, function () {
    console.log('listening on *:3000', ' desde el servidor');
});