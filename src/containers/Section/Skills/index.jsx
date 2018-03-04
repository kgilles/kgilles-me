import React from 'react';
import styles from './index.scss';
import Skill from '../../../components/Skill';
import t from '../../../text';

const tools = ['ci', 'javaScript', 'selenium'];
const renderSkills = tools.map((tool) => {
  return <Skill key={tool} title={t(`skills.tools.${tool}.title`)}>
    {t(`skills.tools.${tool}.description`)}
  </Skill>
});

const SectionSkills = () => (
  <div className={styles.skills}>
    <div className={`${styles.part} ${styles.left}`}>
      <span>{t('skills.statement')}</span>
    </div>
    <div className={`${styles.part} ${styles.right}`}>
      {renderSkills}
    </div>
  </div>
);

export default SectionSkills;
