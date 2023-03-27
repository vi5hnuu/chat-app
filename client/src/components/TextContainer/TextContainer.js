import React from 'react';
import onlineIcon from '../../Icons/onlineIcon.png';
import Chip from '../Chip/Chip';
import styles from './TextContainer.module.css';

const TextContainer = ({ users }) => (
  <div className={styles["container"]}>
    <div>
      <h1>People currently chatting:</h1>
      <div className={styles["activeContainer"]}>
        {users.map(({ name }) => <Chip text={name} icon={onlineIcon} />
        )}
      </div>
    </div>
  </div>
);

export default TextContainer;