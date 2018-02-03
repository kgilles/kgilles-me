import React from 'react';
import Event from '../../components/Event';
import styles from './index.scss';

export default class Events extends React.Component {
  generateYearlyEvents() {
    return this.yearRange().map(year => <Event {...this.props} key={year} year={year} />);
  }

  yearRange() {
    const numYears = (this.props.endYear - this.props.startYear) + 1;
    return [...Array(numYears).keys()].map(key => key + this.props.startYear);
  }

  render() {
    return (
      <div id="events" className={styles.events}>
        {this.generateYearlyEvents()}
      </div>
    );
  }
}
