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
  const wrapper = setup();
  it('renders a h1 tag containing the title', () => {
    expect(wrapper.find('h1').props().children).toBe('Create A Document');
  });
  it('renders a form for creating a document', () => {
    expect(wrapper.find('form').length).toBe(1);
  });
  it('renders a select box for selecting documents access', () => {
    expect(wrapper.find('input').length).toBe(1);
  });
  it('renders an input field for inputing the document title', () => {
    expect(wrapper.find('input').props().type).toBe('text');
    expect(wrapper.find('Input').length).toBe(1);
  });
  it('renders a textarea for inputing the document content', () => {
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('textarea').props().name).toBe('body');
  });
  it('renders a submit button to create a document', () => {
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').props().children[0]).toBe('Create Document');
  });
  it('does not render img, span, ul e.t.c on the page', () => {
    expect(wrapper.find('a').length).toBe(0);
    expect(wrapper.find('li').length).toBe(0);
    expect(wrapper.find('span').length).toBe(0);
    expect(wrapper.find('ul').length).toBe(0);
    expect(wrapper.find('img').length).toBe(0);
  });
});
