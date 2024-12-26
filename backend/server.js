// Import potrebnih modula
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors')
const app = express();
require('dotenv').config()
const {handleSocket} = require('./socket')
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_LINK, 
        methods: ['GET', 'POST'],
    },
});
// Socket.IO događaji
io.on('connection', (socket) => {
    socket.emit('connected', {id: socket.id})
    handleSocket(socket, io)
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server radi na http://localhost:${PORT}`);
});



