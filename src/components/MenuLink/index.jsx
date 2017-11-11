import React from 'react';
import styles from './index.scss';

const MenuLink = ({ active, children, linkId }) => (
  <div className={styles.menuLink} data-link-id={linkId}>
    <div>
      {children}
    </div>
    {active && <div className={styles.linkBottom} />}
  </div>
);

export default MenuLink;
