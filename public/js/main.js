var socket = io()
var $name = $('#name')
var $message = $('#message')
var $send = $('#send')
var $messagesList = $('#messages-list')

$send.on('click', () => {
    var data = { name: $name.val(), message: $message.val() }
    socket.emit('sendMessage', data)
    $message.val('').focus()
})

socket.on('receiveMessage',(data) => {
    console.log("New Message", data)
    $messagesList.append(`<li>${data.message} - ${data.name}</li>`)
})

//whenever the client recieves a "recieveMessage" event,
//append the attached data to the <ul> in an <li> tag...