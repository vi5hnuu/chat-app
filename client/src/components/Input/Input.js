import React from 'react'
import './Input.css'

export default function Input({ message, setMessage, sendMessage }) {
  return <form className='form'>
    <input
      className='input'
      type='text'
      placeholder='Type a message...'
      value={message}
      onChange={(evnt) => setMessage(evnt.target.value)}
      onKeyDown={(evnt) => evnt.key === 'Enter' ? sendMessage(message) : null}
    />
    <button
      className='sendButton'
      onClick={(evnt) => {
        evnt.preventDefault()
        sendMessage(message)
      }}>Send</button>
  </form>
}
