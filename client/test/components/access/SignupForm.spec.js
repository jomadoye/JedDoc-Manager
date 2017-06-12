import expect from 'expect';
import React from 'react';
import {
  shallow,
} from 'enzyme';
import SignupForm from '../../../components/access/SignupForm.jsx';

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

  return shallow(< SignupForm {...props
    }
    />);
}
describe('SignupForm', () => {
  const wrapper = setup();
  it('renders login page message', () => {
    expect(wrapper.find('h1')
          .length)
        .toBe(1);
  });
  it('renders correct content of login page message', () => {
    expect(wrapper.find('h1')
          .props()
          .children)
        .toBe('Join our community');
  });
  it('renders two four fields for password and username, email and fullname',
      () => {
        expect(wrapper.find('TextFieldGroup')
            .length)
          .toBe(4);
      });
  it('renders the correct content for fullname field',
      () => {
        expect(wrapper.find('TextFieldGroup')
            .first().props().field)
          .toBe('fullname');
        expect(wrapper.find('TextFieldGroup')
            .first().props().label)
          .toBe('fullname');
        expect(wrapper.find('TextFieldGroup')
            .first().props().materialIcon)
          .toBe('account_circle');
        expect(wrapper.find('TextFieldGroup')
            .first().props().type)
          .toBe('text');
      });
  it('renders the correct content for password field',
      () => {
        expect(wrapper.find('TextFieldGroup')
            .last().props().field)
          .toBe('password');
        expect(wrapper.find('TextFieldGroup')
            .last().props().label)
          .toBe('password');
        expect(wrapper.find('TextFieldGroup')
            .last().props().materialIcon)
          .toBe('https');
        expect(wrapper.find('TextFieldGroup')
            .last().props().type)
          .toBe('password');
      });
  it('renders the correct content for email field',
      () => {
        expect(wrapper.find('TextFieldGroup')
            .at(2).props().field)
          .toBe('email');
        expect(wrapper.find('TextFieldGroup')
            .at(2).props().label)
          .toBe('email');
        expect(wrapper.find('TextFieldGroup')
            .at(2).props().materialIcon)
          .toBe('email');
        expect(wrapper.find('TextFieldGroup')
            .at(2).props().type)
          .toBe('email');
      });
  it('renders the correct content for username field',
      () => {
        expect(wrapper.find('TextFieldGroup')
            .at(1).props().field)
          .toBe('username');
        expect(wrapper.find('TextFieldGroup')
            .at(1).props().label)
          .toBe('username');
        expect(wrapper.find('TextFieldGroup')
            .at(1).props().materialIcon)
          .toBe('account_box');
        expect(wrapper.find('TextFieldGroup')
            .at(1).props().type)
          .toBe('text');
      });

  it('renders a Sign up button', () => {
    expect(wrapper.find('button')
          .length)
        .toBe(1);
  });
  it('renders the correct content of the Sign up button', () => {
    expect(wrapper.find('button')
          .props()
          .children[0])
        .toBe('Sign up');
  });
  it('does not render img, footer, li, ui, h5 e.t.c', () => {
    expect(wrapper.find('footer')
          .length)
        .toBe(0);
    expect(wrapper.find('li')
          .length)
        .toBe(0);
    expect(wrapper.find('ul')
          .length)
        .toBe(0);
    expect(wrapper.find('h5')
          .length)
        .toBe(0);
    expect(wrapper.find('p')
          .length)
        .toBe(0);
    expect(wrapper.find('a')
          .length)
        .toBe(0);
    expect(wrapper.find('img')
          .length)
        .toBe(0);
    expect(wrapper.find('h2')
          .length)
        .toBe(0);
    expect(wrapper.find('h3')
          .length)
        .toBe(0);
    expect(wrapper.find('h4')
          .length)
        .toBe(0);
    expect(wrapper.find('row')
          .length)
        .toBe(0);
  });
});
