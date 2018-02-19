import React from 'react';
import Competence from '../../../components/Competence';
import styles from './index.scss';

const SectionExpertise = () => (
  <div className={styles.expertise}>
    <Competence color='red'>QA</Competence>
    <Competence color='green'>Front-End</Competence>
    <Competence color='blue'>DevOps</Competence>
  </div>
);

export default SectionExpertise;
