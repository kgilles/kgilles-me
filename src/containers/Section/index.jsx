import React from 'react';
import Expertise from './Expertise';
import Skills from './Skills';
import styles from './index.scss';
import t from '../../text';

function resizeExpertise() {
  const expertiseSection = document.querySelector('#expertise');
  const competenceBlock = expertiseSection.querySelector('div');
  const blockHeight = competenceBlock.offsetHeight;

  if (expertiseSection.style.height > blockHeight) {
    expertiseSection.style.height = `${blockHeight}px`;
  }
}

function resizeSections() {
  resizeExpertise();
}

const SectionBase = ({ children, id, title }) => (
  <div className={styles.section} id={id}>
    <span className={styles.sectionTitle}>
      {title}
    </span>
    {children}
  </div>
);

const SectionExpertise = () => (
  <SectionBase id='expertise' title={t('sections.expertise.title')}>
    <Expertise />
  </SectionBase>
);

const SectionSkills = () => (
  <SectionBase id='skills' title={t('sections.skills.title')}>
    <Skills />
  </SectionBase>
);

export {
  SectionExpertise,
  SectionSkills
};

window.addEventListener('load', () => resizeSections());
window.addEventListener('resize', () => resizeSections());
