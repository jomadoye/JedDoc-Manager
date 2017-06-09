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

  it('should have h4 elements', () => {
    expect(wrapper.find('h4')
          .length)
        .toBe(2);
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
});
