import React from 'react';
import './App.scss';
import Timeline from '../components/Timeline';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeEventYears: []
    };

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
    const endYear = new Date().getFullYear();

    return (
      <Timeline
        {...this.state}
        startYear={2011}
        endYear={endYear}
        activateEventYear={this.activateEventYear}
      />
    );
  }
}