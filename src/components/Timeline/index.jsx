import React from 'react';
import styles from './index.scss';
import t from '../../text';

export default class Timeline extends React.Component {
  generateYearBlocks() {
    let eventTop = 0;
    return this.yearRange().map((year) => {
      if (year === this.props.startYear) {
        eventTop += 15;
        return (
          <div key={year}>
            <div className={`${styles.keyYear} ${styles.yearBlock}`}>
              <span>{year}</span>
            </div>
            <div className={styles.eventDescription} style={{ top: `${eventTop}px` }}>
              {t(`timeline.events.${year}`)}
            </div>
          </div>
        );
      } else if (year === this.props.endYear) {
        eventTop += 50;
        return (
          <div key={year}>
            <div className={`${styles.keyYear} ${styles.yearBlock}`}>
              <span>{year}</span>
            </div>
            <div className={styles.eventDescription} style={{ top: `${eventTop}px` }}>
              {t(`timeline.events.${year}`)}
            </div>
          </div>
        );
      }

      eventTop += 50;
      return (
        <div key={year}>
          <div className={`${styles.midYear} ${styles.yearBlock}`}>
            <span>{year}</span>
          </div>
          <div className={styles.eventDescription} style={{ top: `${eventTop}px` }}>
            {t(`timeline.events.${year}`)}
          </div>
        </div>
      );
    });
  }

  yearRange() {
    const numYears = this.props.endYear - this.props.startYear + 1;
    return [...Array(numYears).keys()].map(key => key + this.props.startYear);
  }

  render() {
    return (
      <div id={'timeline'} className={styles.timeline}>
        {this.generateYearBlocks()}
      </div>
    );
  }
}