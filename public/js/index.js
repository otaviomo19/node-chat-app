var socket = io();

socket.on('connect', function (){
  console.log('Connected to Server')

  socket.emit('createMessage',{
    from: 'Andrew',
    text:"holaaaaaa"
  })
})

socket.on('disconnect',function () {
  console.log('Disconnected from server')
})

socket.on('newMessage', function(message){
  console.log("newMessage",message)
})
