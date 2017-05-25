import expect from 'expect';
import React from 'react';
import {
  shallow,
} from 'enzyme';
import Footer from '../../../components/General/footer.jsx';

/**
 * This function setup the component
 *
 * @returns {object}
 */
function setup() {
  const props = {
  };

  return shallow(<Footer {...props} />);
}
describe('Footer', () => {
  it('renders li, ul, h5, div, footer, p, a', () => {
    const wrapper = setup();
    expect(wrapper.find('li').length).toBe(4);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('h5').length).toBe(2);
    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.find('footer').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('a').length).toBe(5);
  });

  it('does not render img, form, h1 -h4', () => {
    const wrapper = setup();
    expect(wrapper.find('img').length).toBe(0);
    expect(wrapper.find('form').length).toBe(0);
    expect(wrapper.find('h1').length).toBe(0);
    expect(wrapper.find('h2').length).toBe(0);
    expect(wrapper.find('h3').length).toBe(0);
    expect(wrapper.find('h4').length).toBe(0);
    expect(wrapper.find('row').length).toBe(0);
  });
});
