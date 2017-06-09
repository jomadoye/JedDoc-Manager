import expect from 'expect';
import React from 'react';
import {
  shallow,
} from 'enzyme';
import { Dashboard } from '../../../components/Dashboard/Dashboard.jsx';

/**
 * This function setup the component
 *
 * @param {string} isSearchDocument
 * @returns {object}
 */
function setup() {
  const props = {
    contextTypes: () => ({}),
    state: {},
    onchange: () => ({}),
    onsubmit: () => ({}),
    documents: {
      AuthToViewDocuments: {
        documents: [{
          title: 'jed',
          body: 'jed',
          User: {
            fullname: 'jed',
          },
        }],
      },
      AuthorizeToViewDocuments: {
        documents: [{
          title: 'jed',
          body: 'jed',
          User: {
            fullname: 'jed',
          },
        }],
      },
      count: 2,
    },
    readOnly: true,
    deleteDocument: () => ({}),
    deleteDocumentByAdmin: () => ({}),
    deleteFlashMessage: () => ({}),
    updateDocument: () => ({}),
    searchDocumentsByTitleOnDashboard: () => ({}),
    loadAuthorizedToViewDocument: () => ({}),
    AuthToViewDocuments: [],
  };

  return shallow(< Dashboard {...props
    }
    />);
}
describe('Dashboard', () => {
  const wrapper = setup();
  it('renders a div', () => {
    expect(wrapper.find('div')
          .length)
        .toBe(13);
  });

  it('should have h6 elements', () => {
    expect(wrapper.find('h6')
          .length)
        .toBe(2);
  });

  it('should render a search field', () => {
    expect(wrapper.find('#first_name')
          .length)
        .toBe(2);
  });

  it('should have one Link router element in render', () => {
    expect(wrapper.find('Link')
          .length)
        .toBe(0);
  });
});
