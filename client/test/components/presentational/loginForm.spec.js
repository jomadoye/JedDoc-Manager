import expect from 'expect';
import React from 'react';
import {
  shallow,
} from 'enzyme';
import LoginForm from '../../../components/login/LoginForm.jsx';

/**
 * This function setup the component
 *
 * @returns {object}
 */
function setup() {
  const props = {
    state: {
      errors: {
        form: [],
      },
    },
    onsubmit: () => ({}),
    onchange: () => ({}),
  };

  return shallow(<LoginForm {...props} />);
}
describe('LoginForm', () => {
  it('renders div,form, textFieldGroup, button, i', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('TextFieldGroup').length).toBe(2);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('i').length).toBe(1);
  });

  it('does not render img, footer, li, ui, h5 e.t.c', () => {
    const wrapper = setup();
    expect(wrapper.find('footer').length).toBe(0);
    expect(wrapper.find('li').length).toBe(0);
    expect(wrapper.find('ul').length).toBe(0);
    expect(wrapper.find('h5').length).toBe(0);
    expect(wrapper.find('p').length).toBe(0);
    expect(wrapper.find('a').length).toBe(0);
    expect(wrapper.find('img').length).toBe(0);
    expect(wrapper.find('h1').length).toBe(0);
    expect(wrapper.find('h2').length).toBe(0);
    expect(wrapper.find('h3').length).toBe(0);
    expect(wrapper.find('h4').length).toBe(0);
    expect(wrapper.find('row').length).toBe(0);
  });
});
