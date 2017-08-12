import React from 'react';
import './App.scss';
import Timeline from '../components/Timeline';

export default class App extends React.Component {
  render() {
    const endYear = new Date().getFullYear();

    return (
      <Timeline
        startYear={2011}
        endYear={endYear}
      />
    );
  }
}