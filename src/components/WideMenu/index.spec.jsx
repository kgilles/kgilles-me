import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import WideMenu from './index';

function setup() {
  const props = {
    activeLink: 1,
    onClick: sinon.spy()
  };

  const enzymeWrapper = shallow(<WideMenu {...props} />);

  return { enzymeWrapper, props };
}

describe('Components | WideMenu', () => {
  it('renders the WideMenu component', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('#menu-links').nodes.length).toBe(1);
    expect(enzymeWrapper.find('#link-1').nodes.length).toBe(1);
    expect(enzymeWrapper.find('#link-2').nodes.length).toBe(1);
    expect(enzymeWrapper.find('#link-3').nodes.length).toBe(1);
  });

  it('renders three MenuLinks', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('#link-1').nodes.length).toBe(1);
    expect(enzymeWrapper.find('#link-2').nodes.length).toBe(1);
    expect(enzymeWrapper.find('#link-3').nodes.length).toBe(1);
  });

  it('adds the active prop to the relevant MenuLink', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('#link-1').props().active).toBe(true);
    expect(enzymeWrapper.find('#link-2').props().active).toBe(undefined);
    expect(enzymeWrapper.find('#link-3').props().active).toBe(undefined);
  });

  it('triggers the parent onClick function onClick', () => {
    const { enzymeWrapper, props } = setup();

    enzymeWrapper.find('#menu-links').simulate('click');
    expect(props.onClick.callCount).toBe(1);
  });
});
