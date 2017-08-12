import React from 'react';
import styles from './index.scss';
import t from '../../text';

export default class Timeline extends React.Component {
  render() {
    const eventDescTop = this.props.eventPosition === 1 ? 15 : 15 + 50 * (this.props.eventPosition - 1);
    let yearBlockClasses = styles.eventContainer;
    yearBlockClasses += this.props.keyYear === true ? ` ${styles.keyYear}` : ` ${styles.midYear}`;

    return (
      <div className={yearBlockClasses}>
        <div className={styles.year}>{this.props.year}</div>
        <div className={styles.eventDescription}>
          {t(`timeline.events.${this.props.year}`)}
        </div>
      </div>
    );
  }
}
