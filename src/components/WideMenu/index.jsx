import React from 'react';
import MenuLink from '../MenuLink';
// import styles from './index.scss';
// import t from '../../text';

export default class WideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLink: 1
    };
  }

  render() {
    return (
      <div>
        <MenuLink id={'1'}>
          Link 1
        </MenuLink>
        <MenuLink id={'2'}>
          Link 2
        </MenuLink>
        <MenuLink id={'3'}>
          Link 3
        </MenuLink>
      </div>
    );
  }
}
