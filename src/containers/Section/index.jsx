import React from 'react';
import Expertise from './Expertise';
import Skills from './Skills';
import styles from './index.scss';

function resizeSection() {
  const expertiseSection = document.querySelector('#expertise');
  const competenceBlock = expertiseSection.querySelector('div');
  const blockHeight = competenceBlock.scrollHeight;

  expertiseSection.style.height = `${blockHeight}px`;
}

const SectionBase = ({ children, id }) => (
  <div className={styles.section} id={id}>
    {children}
  </div>
);

const SectionExpertise = () => (
  <SectionBase id='expertise'>
    <Expertise />
  </SectionBase>
);

const SectionSkills = () => (
  <SectionBase id='skills'>
    <Skills />
  </SectionBase>
);

export {
  SectionExpertise,
  SectionSkills
};

window.addEventListener('load', () => resizeSection());
window.addEventListener('resize', () => resizeSection());
