import React from 'react';
import Event from '../Event';
import styles from './index.scss';

export default class Timeline extends React.Component {
  generateYearlyEvents() {
    return this.yearRange().map(year => <Event {...this.props} key={year} year={year} />);
  }

  yearRange() {
    const numYears = (this.props.endYear - this.props.startYear) + 1;
    return [...Array(numYears).keys()].map(key => key + this.props.startYear);
  }

  render() {
    return (
      <div id={'timeline'} className={styles.timeline}>
        {this.generateYearlyEvents()}
      </div>
    );
  }
}
