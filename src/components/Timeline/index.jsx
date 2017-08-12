import React from 'react';
import Event from '../Event';
import styles from './index.scss';

export default class Timeline extends React.Component {
  generateYearlyEvents() {
    let eventPosition = 0;

    return this.yearRange().map((year) => {
      eventPosition += 1;
      if (year === this.props.startYear) {
        return (<Event {...this.props} key={year} year={year} keyYear={true} eventPosition={eventPosition} />);
      } else if (year === this.props.endYear) {
        return (<Event {...this.props} key={year} year={year} keyYear={true} eventPosition={eventPosition} />);
      }
      return (<Event {...this.props} key={year} year={year} eventPosition={eventPosition} />);
    });
  }

  yearRange() {
    const numYears = this.props.endYear - this.props.startYear + 1;
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
