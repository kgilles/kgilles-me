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
    let yearBlockClasses = `${styles.eventContainer} ${styles.yearBlock}`;

    if (this.props.activeEventYears.indexOf(this.props.year) !== -1) yearBlockClasses += ` ${styles.active}`;
    if (!this.hasDescription()) yearBlockClasses += ` ${styles.empty}`;

    return (
      <div
        id={`event-container-${this.props.year}`}
        data-year={this.props.year}
        className={yearBlockClasses}
        onClick={() => this.handleClick()}
      >
        <div id={`event-year-${this.props.year}`} className={styles.year}>{this.props.year}</div>
        <div id={`event-summary-${this.props.year}`} className={styles.eventSummary}>
          {t(`timeline.events.${this.props.year}.summary`)}
        </div>
        <div id={`event-description-${this.props.year}`} className={styles.eventDescription}>
          {t(`timeline.events.${this.props.year}.description`)}
        </div>
      </div>
    );
  }
}
