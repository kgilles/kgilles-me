import React from 'react';
import WideMenu from '../../components/WideMenu';
import styles from './index.scss';
import t from '../../text';
import './NA-map.png';
import './EU-map.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLink: 1
    };

    this.onMenuLinkClick = this.onMenuLinkClick.bind(this);
  }

  onMenuLinkClick(e) {
    const linkId = parseInt(e.target.dataset.linkId, 10) ||
                   parseInt(e.target.parentElement.dataset.linkId, 10);

    if (this.state.activeLink === linkId) return;
    this.setState({ activeLink: linkId });
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
        <div className={styles.wideMenu}>
          <WideMenu {...this.state} onClick={this.onMenuLinkClick} />
        </div>
      </header>
    );
  }
}
