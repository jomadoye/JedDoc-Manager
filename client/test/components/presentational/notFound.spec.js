import expect from 'expect';
import React from 'react';
import {
  shallow,
} from 'enzyme';
import NotFound from '../../../components/General/NotFound.jsx';

/**
 * This function setup the component
 *
 * @returns {object}
 */
function setup() {
  const props = {
  };

  return shallow(<NotFound {...props} />);
}
describe('NotFound', () => {
  it('renders div, h3, p, a', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('p').length).toBe(2);
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(2);
  });

  it('does not render footer, li, ul, h5, img, form, h1, h2, h4, row', () => {
    const wrapper = setup();
    expect(wrapper.find('footer').length).toBe(0);
    expect(wrapper.find('li').length).toBe(0);
    expect(wrapper.find('ul').length).toBe(0);
    expect(wrapper.find('h5').length).toBe(0);
    expect(wrapper.find('img').length).toBe(0);
    expect(wrapper.find('form').length).toBe(0);
    expect(wrapper.find('h1').length).toBe(0);
    expect(wrapper.find('h2').length).toBe(0);
    expect(wrapper.find('h4').length).toBe(0);
    expect(wrapper.find('row').length).toBe(0);
  });
});
