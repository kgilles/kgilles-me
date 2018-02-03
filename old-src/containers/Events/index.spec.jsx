import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Events from './index';

function setup(forcedProps = {}) {
  const props = Object.assign({}, {
    startYear: 2011,
    endYear: 2013,
    toggleEventYear: sinon.spy()
  }, forcedProps);

  const enzymeWrapper = shallow(<Events {...props} />);

  return { enzymeWrapper, props };
}

describe('Containers | Events', () => {
  it('renders the Events container', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('#events').nodes.length).toBe(1);
  });

  it('renders as many child components as the amount of years', () => {
    const { enzymeWrapper, props } = setup();
    const numYears = (props.endYear - props.startYear) + 1;

    expect(enzymeWrapper.find('#events').node.props.children.length).toBe(numYears);
  });
});
