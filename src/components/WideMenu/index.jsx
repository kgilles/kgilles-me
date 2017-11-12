import React from 'react';
import MenuLink from '../MenuLink';
// import styles from './index.scss';
import t from '../../text';

export default class WideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.menuLinks = this.menuLinks.bind(this);
  }

  menuLinks() {
    const links = [];

    for (let i = 1; i <= 3; i += 1) {
      const props = {
        key: i,
        linkId: i
      };
      if (this.props.activeLink === i) props.active = true;

      const link = (<MenuLink {...props}>{t(`header.menu.links.link_${i}`)}</MenuLink>);
      links.push(link);
    }

    return links;
  }

  render() {
    return (
      <div onClick={this.props.onClick && this.props.onClick}>
        {this.menuLinks()}
      </div>
    );
  }
}
