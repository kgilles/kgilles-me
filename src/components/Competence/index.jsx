import React from 'react';
import styles from './index.scss';

const Competence = ({ children, color, title }) => (
  <div style={{ background: color }}>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.titleBorder} />
    <div className={styles.description}>
      {children}
    </div>
  </div>
);

export default Competence;
