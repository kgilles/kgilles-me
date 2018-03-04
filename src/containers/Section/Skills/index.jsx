import React from 'react';
import styles from './index.scss';
import Skill from '../../../components/Skill';

const SectionSkills = () => (
  <div className={styles.skills}>
    <div className={`${styles.part} ${styles.left}`}>
      <span>Since middle school I've been "learning by doing". I quickly pick up and learn new topics and in a short amount of time I'm able contribute on a high level.</span>
    </div>
    <div className={`${styles.part} ${styles.right}`}>
      <Skill title='Continous Integration'>
        Throughout my years as a QA/QC Engineer I have strived to move towards CI as much as possible.
      </Skill>
      <Skill title='JavaScript'>
        I have worked as a QA/QC on mainly JavaScript projects, giving me good insight in the language and all its frameworks etc. thanks to spending a lot of time reviewing the code to find areas to test.
      </Skill>
      <Skill title='Selenium'>
        Selenium is the most common framework for browser automation. I have experience working with it in JavaScript, Ruby, Java and PHP.
      </Skill>
    </div>
  </div>
);

export default SectionSkills;
