import React from 'react';
import Competence from '../../../components/Competence';
import styles from './index.scss';
import t from '../../../text';

const SectionExpertise = () => (
  <div className={styles.expertise}>
    <Competence color='#2b2b2b' title={t('expertise.qa.title')}>
      {t('expertise.qa.description')}
    </Competence>
    <Competence color='#4c4b4b' title={t('expertise.webDev.title')}>
      {t('expertise.webDev.description')}
    </Competence>
    <Competence color='#6d6d6d' title={t('expertise.devOps.title')}>
      {t('expertise.devOps.description')}
    </Competence>
  </div>
);

export default SectionExpertise;
