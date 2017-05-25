import expect from 'expect';
import React from 'react';
import {
  shallow,
} from 'enzyme';
import CreateDocumentForm from
  '../../../components/documents/createDocumentsPage/CreateDocumentForm.jsx';

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
  };

  return shallow(<CreateDocumentForm {...props} />);
}
describe('CreateDocumentForm', () => {
  it('renders form, div, iput, label, Row, textarea', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('Input').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('label').length).toBe(2);
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('Row').length).toBe(1);
    expect(wrapper.find('label').length).toBe(2);
  });
  it('does not render img, span, ul e.t.c', () => {
    const wrapper = setup();
    expect(wrapper.find('a').length).toBe(0);
    expect(wrapper.find('li').length).toBe(0);
    expect(wrapper.find('span').length).toBe(0);
    expect(wrapper.find('ul').length).toBe(0);
    expect(wrapper.find('img').length).toBe(0);
  });
});
