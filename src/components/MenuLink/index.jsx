import React from 'react';
import styles from './index.scss';

const MenuLink = ({ children }) => (
  <div className={styles.menuLink}>
    {children}
  </div>
);

export default MenuLink;
