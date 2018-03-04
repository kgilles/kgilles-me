import React from 'react';
import styles from './index.scss';

const Skill = ({ children, title }) => (
  <div className={styles.block}>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.description}>
      {children}
    </div>
  </div>
);

export default Skill;
