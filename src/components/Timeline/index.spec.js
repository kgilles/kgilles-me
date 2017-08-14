import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Timeline from './index';

function setup(forcedProps = {}) {
  const props = Object.assign({}, {
    startYear: 2011,
    endYear: 2013,
    activateEventYear: sinon.spy()
  }, forcedProps);

  const enzymeWrapper = shallow(<Timeline {...props} />);

  return { enzymeWrapper, props };
}

describe('Components | Timeline', function() {
  it('renders the Timeline component', function() {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find(`#timeline`).nodes.length).toBe(1);
  });

  it('renders as many child components as the amount of years', function() {
    const { enzymeWrapper, props } = setup();
    const numYears = props.endYear - props.startYear + 1;

    expect(enzymeWrapper.find(`#timeline`).node.props.children.length).toBe(numYears);
  });
});
