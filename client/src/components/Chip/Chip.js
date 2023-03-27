import React from 'react'
import styles from './Chip.module.css'

export default function Chip({ text, icon }) {
  return <div className={styles["chip"]}>
    <span>{text}</span>
    <img alt='user chip' src={icon} />
  </div>
}
