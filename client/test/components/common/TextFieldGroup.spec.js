import expect from 'expect';
import React from 'react';
import {
  shallow,
} from 'enzyme';
import TextFieldGroup from '../../../components/common/TextFieldGroup.jsx';

/**
 * This function setups the component
 *
 * @param {object} error
 * @returns {object}
 */
function setup(error) {
  const props = {
    field: 'jed',
    value: 'jed',
    label: 'jed',
    error,
    type: 'jed',
    onChange: () => {},
    checkUserExists: () => {},
    materialIcon: '',
  };

  return shallow(<TextFieldGroup {...props} />);
}
describe('textFieldGroup', () => {
  const wrapper = setup('false');
  it('renders content of the input', () => {
    expect(wrapper.find('input').props().id).toBe('jed');
    expect(wrapper.find('input').props().name).toBe('jed');
    expect(wrapper.find('input').props().type).toBe('jed');
    expect(wrapper.find('input').props().value).toBe('jed');
  });
  it('renders content of the label', () => {
    expect(wrapper.find('label').props().htmlFor).toBe('jed');
    expect(wrapper.find('label').props().children).toBe('jed');
  });
  it('renders the correct classNames of the elements', () => {
    expect(wrapper.find('i').props().className).toBe('material-icons prefix');
    expect(wrapper.find('input').props().className).toBe('validate invalid');
    expect(wrapper.find('div').first().props().className).toBe('row');
    expect(wrapper.find('span').props().className).toBe('red');
  });
  it('renders the correct number of elements', () => {
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('i').length).toBe(1);
    expect(wrapper.find('label').length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
  });
  it('does not render form, img e.t.c', () => {
    expect(wrapper.find('form').length).toBe(0);
    expect(wrapper.find('img').length).toBe(0);
    expect(wrapper.find('a').length).toBe(0);
    expect(wrapper.find('hr').length).toBe(0);
    expect(wrapper.find('li').length).toBe(0);
    expect(wrapper.find('ul').length).toBe(0);
  });
});
