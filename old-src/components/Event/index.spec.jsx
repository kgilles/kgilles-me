import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Event from './index';
import styles from './index.scss';
import t from '../../text';

function setup(forcedProps = {}) {
  const props = Object.assign({}, {
    year: 2011,
    activeEventYears: [],
    toggleEventYear: sinon.spy()
  }, forcedProps);

  const enzymeWrapper = shallow(<Event {...props} />);

  return { enzymeWrapper, props };
}

describe('Components | Event', () => {
  it('renders the Event component', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find(`#event-container-${props.year}`).nodes.length).toBe(1);
    expect(enzymeWrapper.find(`#event-year-${props.year}`).nodes.length).toBe(1);
    expect(enzymeWrapper.find(`#event-summary-${props.year}`).nodes.length).toBe(1);
    expect(enzymeWrapper.find(`#event-description-${props.year}`).nodes.length).toBe(1);
  });

  it('renders the texts', () => {
    const { enzymeWrapper, props } = setup();
    const year = props.year.toString();
    const summary = t(`events.${props.year}.summary`);
    const description = t(`events.${props.year}.description`);

    expect(enzymeWrapper.find(`#event-year-${props.year}`).text()).toBe(year);
    expect(enzymeWrapper.find(`#event-summary-${props.year}`).text()).toBe(summary);
    expect(enzymeWrapper.find(`#event-description-${props.year}`).text()).toBe(description);
  });

  it('appends the active class to active year events', () => {
    const { enzymeWrapper, props } = setup({ activeEventYears: [2011] });

    expect(enzymeWrapper.find(`#event-container-${props.year}`).node.props.className).toContain(styles.active);
  });

  it('appends the empty class to year events without descriptions', () => {
    const { enzymeWrapper, props } = setup({ year: 2012 });

    expect(enzymeWrapper.find(`#event-container-${props.year}`).node.props.className).toContain(styles.empty);
  });

  it('triggers the toggleEventYear function onClick', () => {
    const { enzymeWrapper, props } = setup();

    enzymeWrapper.find(`#event-year-${props.year}`).simulate('click');
    expect(props.toggleEventYear.callCount).toBe(1);

    enzymeWrapper.find(`#event-summary-${props.year}`).simulate('click');
    expect(props.toggleEventYear.callCount).toBe(2);
  });

  it('doesn\'t trigger the toggleEventYear function for empty events', () => {
    const { enzymeWrapper, props } = setup({ year: 2012 });
    enzymeWrapper.find(`#event-container-${props.year}`).simulate('click');

    expect(props.toggleEventYear.callCount).toBe(0);
  });
});