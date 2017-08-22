import React from 'react';
import styles from './index.scss';
import t from '../../text';

export default class Events extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  hasDescription() {
    return t(`events.${this.props.year}.summary`) !== '';
  }

  handleClick() {
    if (this.hasDescription()) this.props.toggleEventYear(this.props.year);
  }

  containerClasses() {
    let classes = styles.eventContainer;

    if (this.props.activeEventYears.indexOf(this.props.year) !== -1) classes += ` ${styles.active}`;
    if (!this.hasDescription()) classes += ` ${styles.empty}`;

    return classes;
  }

  render() {
    return (
      <div
        id={`event-container-${this.props.year}`}
        data-year={this.props.year}
        className={this.containerClasses()}
      >
        <div
          id={`event-year-${this.props.year}`}
          className={styles.year}
          onClick={this.handleClick}
        >
          {this.props.year}
        </div>
        <div
          id={`event-summary-${this.props.year}`}
          className={styles.eventSummary}
          onClick={this.handleClick}
        >
          {t(`events.${this.props.year}.summary`)}
        </div>
        <div id={`event-description-${this.props.year}`} className={styles.eventDescription}>
          {t(`events.${this.props.year}.description`)}
        </div>
      </div>
    );
  }
}
