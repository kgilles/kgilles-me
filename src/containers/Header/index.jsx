import React from 'react';
import styles from './index.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header>
        <div className={styles.name}>
          Kenny Gilles
        </div>
        <div className={styles.about}>
          Who am I?
        </div>
        <div className={styles.links}>
          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
        </div>
      </header>
    );
  }
}
