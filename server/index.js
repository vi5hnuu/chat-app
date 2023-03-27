const express = require('express')
const socketIO = require('socket.io')
const http = require('http')
const cors = require('cors')
const { router } = require('./router')
const { addUser, removeUser, getUser, getUserInRoom } = require('./users')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(router)
const server = http.createServer(app)
const io = socketIO(server)


io.on('connection', (socket) => {
  console.log(`${socket.id} connected.`);
  socket.on('join', ({ name, room }) => {
    try {
      const user = addUser({ id: socket.id, name, room })
      socket.emit('message', { user: 'admin', text: `${user.name}, Welcome to the ${user.room}` })
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined` })
      socket.join(user.room)
      io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) })
    } catch (err) {

    }
  })
  socket.on('sendMessage', (message) => {
    const user = getUser(socket.id)
    io.to(user.room).emit('message', { user: user.name, text: message })
    // signal()
  })
  socket.on('disconnect', () => {
    const user = removeUser(socket.id)
    io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left` })
    io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) })
    console.log(`${socket.id} disconnected`);
  })
})

server.listen(PORT, () => { console.log(`server has started on port ${PORT}`); })

