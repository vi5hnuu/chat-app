import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'
import { useLocation } from 'react-router-dom'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import TextContainer from '../TextContainer/TextContainer'


let socket;
export default function Chat() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [activeUsers, setActiveUsers] = useState([])
  const ENDPOINT = 'localhost:5000'

  const location = useLocation()
  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    setName(name)
    setRoom(room)
    socket = io(ENDPOINT)
    socket.emit('join', { name, room })
    return () => {
      socket.disconnect();
      socket.off()
    }
  }, [location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  useEffect(() => {
    socket.on('roomData', (roomData) => {
      console.log('users', roomData.users);
      setActiveUsers(roomData.users)
    })
  }, [])

  const sendMessage = (message) => {
    if (message) {
      socket.emit('sendMessage', message)
      setMessage('')
    }
  }
  console.log(message, messages);
  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} name={name} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={activeUsers} />
    </div>
  )
}
