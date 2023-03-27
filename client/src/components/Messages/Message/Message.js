import './Message.css'
import ReactEmoji from 'react-emoji'
import React from 'react'

export default function Message({ message: { user, text }, name }) {
  let isSendByCurrentUser = false;
  const trimName = name.trim().toLowerCase();
  if (user === trimName) {
    isSendByCurrentUser = true;
  }
  return (
    isSendByCurrentUser ?
      <div className='messageContainer justifyEnd'>
        <p className='sentText pr-10'>{user}</p>
        <div className='messageBox backgroundBlue'>
          <p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
      :
      <div className='messageContainer justifyStart'>
        <div className='messageBox backgroundLight'>
          <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
        </div>
        <p className='sentText'>{user}</p>
      </div>
  )
}
