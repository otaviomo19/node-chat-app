const path = require('path');
const http = require('http');
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname,'../public');
const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage',{
    from:"John",
    text:"See u then",
    createAt:123456
  })

  socket.on('createMessage', (message) => {
    console.log('createMessage',message)
  })

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail',newEmail);
  })
  socket.on('disconnect', () => {
    console.log('User was disconnected')
  })
})


server.listen(port, () => {
  console.log(`Server started up at ${port}`)
})
