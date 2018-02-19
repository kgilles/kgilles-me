import React from 'react';
import styles from './index.scss';

const classes = {
  devops: `${styles.item} ${styles.devops}`,
  frontend: `${styles.item} ${styles.frontend}`,
  qa: `${styles.item} ${styles.qa}`
};

const SectionExpertise = () => (
  <div className={styles.expertise}>
    <div className={classes.qa}>QA</div>
    <div className={classes.frontend}>Front-End</div>
    <div className={classes.devops}>DevOps</div>
  </div>
);

export default SectionExpertise;
