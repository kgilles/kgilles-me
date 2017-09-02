import React from 'react';
import styles from './index.scss';
import t from '../../text';
import './NA-map.png';
import './EU-map.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header>
        <span className={`${styles.map} ${styles.leftMap}`} />
        <span className={`${styles.map} ${styles.rightMap}`} />
        <div className={styles.name}>
          {t('header.name')}
        </div>
        <div className={styles.about}>
          {t('header.about')}
        </div>
        TODO: Add Links Component
      </header>
    );
  }
}
