import React from 'react';
import './index.scss';
import Events from '../Events';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeEventYears: []
    };

    this.startYear = 2011;
    this.endYear = 2017;

    this.toggleEventYear = this.toggleEventYear.bind(this);
  }

  toggleEventYear(year) {
    const nextActiveYears = this.state.activeEventYears;
    const yearIndex = nextActiveYears.indexOf(year);
    if (yearIndex === -1) {
      nextActiveYears.push(year);
    } else {
      nextActiveYears.splice(yearIndex, 1);
    }

    this.setState({ activeEventYears: nextActiveYears });
  }

  render() {
    return (
      <Events
        {...this.state}
        startYear={this.startYear}
        endYear={this.endYear}
        toggleEventYear={this.toggleEventYear}
      />
    );
  }
}
