import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Join.module.css'

export default function Join() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className={styles['Container']}>
      <h1 className={styles['heading']}>Join</h1>
      <div>
        <input
          placeholder="Name"
          className={styles["joinInput"]}
          type="text"
          onChange={(event) => { setName(event.target.value) }}
        />
        <input
          placeholder="Room Name"
          className={styles["joinInput"]}
          type=" text"
          onChange={(event) => { setRoom(event.target.value) }}
        />
        <Link
          onClick={(evnt) => {
            if (!name || !room) {
              evnt.preventDefault()
            }
          }}
          to={`/chat?name=${name}&room=${room}`}>
          <button
            className={styles['btn']}
            type='submit'>
            Sign In
          </button>
        </Link>
      </div>
    </div >
  )
}
