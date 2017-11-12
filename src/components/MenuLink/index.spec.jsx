import React from 'react';
import { shallow } from 'enzyme';
import MenuLink from './index';
import styles from './index.scss';

function setup(active = false) {
  const props = {
    active,
    linkId: 1
  };

  const enzymeWrapper = shallow(<MenuLink {...props} />);

  return { enzymeWrapper, props };
}

describe('Components | MenuLink', () => {
  it('renders the MenuLink component', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find(`.${styles.menuLink}`).nodes.length).toBe(1);
  });

  it('renders the MenuLink with the active class when active', () => {
    const { enzymeWrapper } = setup(true);

    expect(enzymeWrapper.find(`.${styles.menuLink}`).node.props.className).toContain(styles.activeLink);
    expect(enzymeWrapper.find(`.${styles.linkBottom}`).nodes.length).toBe(1);
  });
});
