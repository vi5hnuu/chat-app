import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message/Message'
import styles from './Messages.module.css'

export default function Messages({ messages, name }) {
  return <ScrollToBottom className={styles['messages']}>
    {messages.map((message, i) => {
      return <div key={i}><Message message={message} name={name} /></div>
    })}
  </ScrollToBottom>
}
