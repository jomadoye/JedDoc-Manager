import expect from 'expect';
import React from 'react';
import {
  shallow,
} from 'enzyme';
import {
  CardDocumentView,
} from '../../../components/common/CardDocumentView.jsx';

/**
 * This function setup the component
 *
 * @param {string} isSearchDocument
 * @returns {object}
 */
function setup() {
  const props = {
    state: {},
    onchange: () => ({}),
    onsubmit: () => ({}),
    document: {
      title: 'jed',
      body: 'jed',
      User: {
        fullname: 'jed',
      },
    },
    readOnly: true,
    deleteDocument: () => ({}),
    deleteDocumentByAdmin: () => ({}),
    deleteFlashMessage: () => ({}),
    documents: {},
    updateDocument: () => ({}),
  };

  return shallow(< CardDocumentView {...props
    }
    />);
}
describe('CardDocumentView', () => {
  const wrapper = setup();
  it('renders a div', () => {
    expect(wrapper.find('div')
          .length)
        .toBe(11);
  });
  it('should have h6 elements', () => {
    expect(wrapper.find('h6')
          .length)
        .toBe(2);
  });
  it('renders the correct content of h6 elements', () => {
    expect(wrapper.find('h6')
          .first().props().children[1])
        .toBe('a few seconds ago');
    expect(wrapper.find('h6')
          .last().props().children[1])
        .toBe('a few seconds ago');
    expect(wrapper.find('h6')
          .first().props().children[0])
        .toBe('Created: ');
    expect(wrapper.find('h6')
          .last().props().children[0])
        .toBe('lastUpdated: ');
  });
  it('should have h4 elements', () => {
    expect(wrapper.find('h4')
          .length)
        .toBe(2);
  });
  it('renders the correct content of h4 elements', () => {
    expect(wrapper.find('h4')
          .first().props().children[1])
        .toBe('e');
    expect(wrapper.find('h4')
          .last().props().children[1])
        .toBe('jed');
    expect(wrapper.find('h4')
          .first().props().children[0])
        .toBe('j');
    expect(wrapper.find('h4')
          .last().props().children[0])
        .toBe('Author: ');
  });
  it('should have one Link router element in render', () => {
    expect(wrapper.find('Link')
          .length)
        .toBe(0);
  });
  it('contains span elements', () => {
    expect(wrapper.find('span')
          .length)
        .toBe(2);
  });
  it('renders the correct className of span elements', () => {
    expect(wrapper.find('span')
          .last().props().className)
        .toBe('card-title grey-text text-darken-4');
    expect(wrapper.find('span')
          .last().props().children[1].props.className)
        .toBe('material-icons right');
  });
  it('renders the correct content of span elements', () => {
    expect(wrapper.find('span')
          .first().props().children)
        .toBe('jed');
    expect(wrapper.find('span')
          .first().props().children[1])
        .toBe('e');
    expect(wrapper.find('span')
          .first().props().children[0])
        .toBe('j');
    expect(wrapper.find('span')
          .last().props().children[0])
        .toBe('jed');
  });
});
