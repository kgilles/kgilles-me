import React from 'react';
import styles from './index.scss';

export default class Timeline extends React.Component {
  generateYearBlocks() {
    return this.yearRange().map((year) => {
      if (year === this.props.startYear) {
        return (
          <div key={year} className={`${styles.keyYear} ${styles.yearBlock}`}>
            <span>{year}</span>
          </div>
        );
      } else if (year === this.props.endYear) {
        return (
          <div key={year} className={`${styles.keyYear} ${styles.yearBlock}`}>
            <span>{year}</span>
          </div>
        );
      }

      return (
        <div key={year} className={`${styles.midYear} ${styles.yearBlock}`}>
          <span>{year}</span>
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