import React from 'react';
import './App.scss';
import Timeline from '../components/Timeline';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeEventYears: []
    };

    this.startYear = 2011;
    this.endYear = 2017;

    this.activateEventYear = this.activateEventYear.bind(this);
  }

  activateEventYear(year) {
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
      <Timeline
        {...this.state}
        startYear={this.startYear}
        endYear={this.endYear}
        activateEventYear={this.activateEventYear}
      />
    );
  }
}
