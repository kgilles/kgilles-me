import React from 'react';
import styles from './index.scss';
import t from '../../text';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header>
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
