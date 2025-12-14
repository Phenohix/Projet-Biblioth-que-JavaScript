const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

const server = http.createServer();
const io = new require("socket.io")(server);
server.listen(8888, () => {console.log('Le serveur écoute sur le port 8888');});

app.use(express.static('src'));

app.get('/', (request, response) => {
    response.sendFile('src/client_socket.io.html', {root: __dirname});
});

let playerList = {};

function sendPlayerList(){
    let response ="";
    for (let key in playerList){
        response += `${playerList[key]}//`
    }
    io.emit('playerList', response)
}

io.on('connection', (socket) => {
    socket.on('test', data => {
        console.log("Message reçu du client :", data);
        socket.emit('test', {'quiterepond': 'le serveur !'})
    });

    socket.on('joinRequest', name => {
        let t = Math.round(Math.random()*10000000000000000);
        playerList[t] = name
        socket.emit('uuid', t)
        console.log(playerList)
        sendPlayerList();
    });

    socket.on('connectP', uuid => {
        if (playerList[uuid]){
            socket.emit('connectP', playerList[uuid])
            sendPlayerList();
        }
    })

    socket.on('quitRequest', uuid => {
        if (playerList[uuid]){
            delete playerList[uuid]
            console.log(playerList)
            sendPlayerList();
        }
    })

    socket.on('getList', d => {
        sendPlayerList()
    })


    socket.on('SendMessage', m => {
        if(playerList[m.uuid]){
            io.emit("newMessage", {"sender": playerList[m.uuid], "message" : m.content})
        }
    })
});


