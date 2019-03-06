import React from 'react';
import { shallow } from 'enzyme';
import Home from '..';

describe('Test the 404 Component', () => {
  const wrapper = shallow(<Home />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change the state after change the input value', () => {
    const newValue = 'YoungM';
    wrapper.find('input[type="text"]').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('input[type="text"]').prop('name')).toContain('username');
    expect(wrapper.find('input[type="password"]').prop('name')).toContain('password');
  });

  it('should simulate on submit event ', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find('form')).toBeDefined();
  });
});
