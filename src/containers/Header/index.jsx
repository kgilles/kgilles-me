import React from 'react';
import styles from './index.scss';
import './dala.jpg';
import t from '../../text';

const Header = () => (
  <header>
    <div className={styles.title}>
      {t('header.title')}
    </div>
  </header>
);

export default Header;
