import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Event from './index';

function setup() {
  const props = {
    year: 2011,
    activeEventYears: [],
    activateEventYear: sinon.spy()
  };

  const enzymeWrapper = shallow(<Event {...props} />);

  return { enzymeWrapper, props };
}

describe('Components | Event', function() {
  it('renders the Event component', function() {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find(`#event-container-${props.year}`).nodes.length).toBe(1);
    expect(enzymeWrapper.find(`#event-year-${props.year}`).nodes.length).toBe(1);
    expect(enzymeWrapper.find(`#event-summary-${props.year}`).nodes.length).toBe(1);
    expect(enzymeWrapper.find(`#event-description-${props.year}`).nodes.length).toBe(1);
  });
});
