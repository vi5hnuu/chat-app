import React from 'react'
import styles from './InfoBar.module.css'
import closeIcon from './../../Icons/closeIcon.png'
import onlineIcon from './../../Icons/onlineIcon.png'

export default function InfoBar(props) {
  return <div className={styles['infoBar']}>
    <div className={styles['leftInnerContainer']}>
      <img src={onlineIcon} alt='online' />
      <h3>{props.name} : {props.room} </h3>
    </div>
    <div className={styles['rightInnerContainer']}>
      <a href='/'><img src={closeIcon} alt='close' /></a>
    </div>
  </div>
}
