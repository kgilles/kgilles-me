import React from 'react';
import styles from './index.scss';

export default class MenuLink extends React.Component {
  linkClasses() {
    let classes = styles.menuLink;
    if (this.props.active) classes = `${classes} ${styles.activeLink}`;

    return classes;
  }

  render() {
    return (
      <div className={this.linkClasses()} data-link-id={this.props.linkId}>
        <div>
          {this.props.children}
        </div>
        {this.props.active && <div className={styles.linkBottom} />}
      </div>
    );
  }
}
