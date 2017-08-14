import React from 'react';
import styles from './index.scss';
import t from '../../text';

export default class Timeline extends React.Component {
  hasDescription() {
    return t(`timeline.events.${this.props.year}.summary`) !== '';
  }

  handleClick() {
    if (this.hasDescription()) this.props.activateEventYear(this.props.year);
  }

  render() {
    const eventDescTop = this.props.eventPosition === 1 ? 15 : 15 + 50 * (this.props.eventPosition - 1);
    let yearBlockClasses = `${styles.eventContainer} ${styles.yearBlock}`;

    if (this.props.activeEventYears.indexOf(this.props.year) !== -1) yearBlockClasses += ` ${styles.active}`;
    if (!this.hasDescription()) yearBlockClasses += ` ${styles.empty}`;

    return (
      <div
        data-year={this.props.year}
        className={yearBlockClasses}
        onClick={() => this.handleClick()}
      >
        <div className={styles.year}>{this.props.year}</div>
        <div className={styles.eventSummary}>
          {t(`timeline.events.${this.props.year}.summary`)}
        </div>
        <div className={styles.eventDescription}>
          {t(`timeline.events.${this.props.year}.description`)}
        </div>
      </div>
    );
  }
}
