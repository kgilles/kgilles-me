import React from 'react';
import Expertise from './Expertise';
import Skills from './Skills';
import styles from './index.scss';

const SectionBase = ({ children }) => (
  <div className={styles.section}>
    {children}
  </div>
);

const SectionExpertise = () => (
  <SectionBase>
    <Expertise />
  </SectionBase>
);

const SectionSkills = () => (
  <SectionBase>
    <Skills />
  </SectionBase>
);

export {
  SectionExpertise,
  SectionSkills
};
