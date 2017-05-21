import expect from 'expect';
import React from 'react';
import {
  shallow,
} from 'enzyme';
import PaginationNav from '../../components/common/PaginationNav.jsx';

/**
 * This function setup the component
 *
 * @param {string} isSearchDocument
 * @returns {object}
 */
function setup(isSearchDocument) {
  const props = {
    index: 0,
    selected: '',
    isActive: '',
    notActive: '',
    handlePagination: (limit, offset) => ({ limit, offset }),
    isSearchDocument,
  };

  return shallow(<PaginationNav {...props} />);
}
describe('PaginationNav', () => {
  it('renders <li></li>', () => {
    const wrapper = setup(false);
    expect(wrapper.find('li').length).toBe(1);
  });
  it('renders <a></a>', () => {
    const wrapper = setup(false);
    expect(wrapper.find('a').length).toBe(1);
  });
  it('default limit and offset are 8, 0 if searching documents', () => {
    const wrapper = setup(true);
    expect(wrapper.find('a').props().onClick().limit).toBe(8);
    expect(wrapper.find('a').props().onClick().offset).toBe(0);
  });
  it('default limit and offset are 5, 0 if searching users', () => {
    const wrapper = setup(false);
    expect(wrapper.find('a').props().onClick().limit).toBe(5);
    expect(wrapper.find('a').props().onClick().offset).toBe(0);
  });
  it('does not render div, span, ul e.t.c', () => {
    const wrapper = setup(true);
    expect(wrapper.find('div').length).toBe(0);
    expect(wrapper.find('span').length).toBe(0);
    expect(wrapper.find('ul').length).toBe(0);
    expect(wrapper.find('form').length).toBe(0);
    expect(wrapper.find('img').length).toBe(0);
  });
});
