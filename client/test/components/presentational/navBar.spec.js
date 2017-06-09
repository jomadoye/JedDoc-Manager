import expect from 'expect';
import React from 'react';
import {
  shallow,
} from 'enzyme';
import {
  NavigationBar,
} from '../../../components/General/NavigationBar.jsx';

/**
 * This function setup the component
 *
 * @returns {object}
 */
function setup() {
  const props = {
    login: {
      isAuthenticated: true,
      user: {
        username: '',
      },
    },
  };

  return shallow(< NavigationBar {...props
    }
    />);
}
describe('NavigationBar', () => {
  const wrapper = setup();

  it('renders the name of the application', () => {
    expect(wrapper.find('.brand-logo')
          .props()
          .children[1])
        .toBe('J-Docs');
  });
  it('should have <div /> elements', () => {
    expect(wrapper.find('div')
          .length)
        .toBe(8);
  });

  it('should have an <Link /> element', () => {
    expect(wrapper.find('Link')
          .length)
        .toBe(4);
  });

  it('should have a <nav /> element', () => {
    expect(wrapper.find('nav')
          .length)
        .toBe(1);
  });

  it('should render the <a /> elements', () => {
    expect(wrapper.find('a')
          .length)
        .toBe(9);
  });

  it('should have an <ul /> element', () => {
    expect(wrapper.find('ul')
          .length)
        .toBe(4);
  });

  it('should have an <i /> element', () => {
    expect(wrapper.find('i')
          .length)
        .toBe(10);
  });

  it('should have an <img /> element', () => {
    expect(wrapper.find('img')
          .length)
        .toBe(2);
  });

  it('does not render img, form, h1 -h4', () => {
    expect(wrapper.find('img')
          .length)
        .toBe(2);
    expect(wrapper.find('form')
          .length)
        .toBe(1);
    expect(wrapper.find('h1')
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
