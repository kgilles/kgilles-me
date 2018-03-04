import React from 'react';
import { shallow } from 'enzyme';
import Competence from './index';

function setup() {
  const props = {
    children: 'description',
    color: '#123456',
    title: 'test'
  };

  const enzymeWrapper = shallow(<Competence {...props} />);
  const elements = enzymeWrapper.find('div').getElements();

  return { elements, props };
}

describe('Components | Competence', () => {
  it('should render the Competence component', () => {
    const { elements } = setup();

    expect(elements.length).toBe(4);
  });

  it('should render the block element', () => {
    const { elements, props } = setup();
    const [block] = elements;

    expect(block.props.children.length).toBe(3);
    expect(block.props.style.background).toBe(props.color);
  });

  it('should render the title element', () => {
    const { elements, props } = setup();
    const [x, title] = elements;

    expect(title.props.children).toBe(props.title);
  });

  it('should render the title border element', () => {
    const { elements } = setup();
    const [x, y, border] = elements;

    expect(border).not.toBe(undefined);
  });

  it('should render the description element', () => {
    const { elements, props } = setup();
    const [x, y, z, description] = elements;

    expect(description.props.children).toBe(props.children);
  });
});
