import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div id={'timeline'}>
        <span>{this.props.startYear}</span>
        <span>{this.props.endYear}</span>
      </div>
    );
  }
}