import React from 'react';
import styles from './index.scss';
import t from '../../text';

export default class Timeline extends React.Component {
  renderEvent() {
    const eventDescTop = this.props.eventPosition === 1 ? 15 : 15 + 50 * (this.props.eventPosition - 1);
    let yearClassNames = styles.yearBlock;
    yearClassNames += this.props.keyYear === true ? ` ${styles.keyYear}` : ` ${styles.midYear}`;

    return (
      <div>
        <div className={yearClassNames}>
          <span>{this.props.year}</span>
        </div>
        <div className={styles.eventDescription} style={{ top: `${eventDescTop}px` }}>
          {t(`timeline.events.${this.props.year}`)}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderEvent()}
      </div>
    );
  }
}
