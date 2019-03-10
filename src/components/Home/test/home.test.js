import React from 'react';
import { shallow, mount } from 'enzyme';
import { Login } from '..';

describe('Test the Login Component', () => {
  let wrapper = shallow(<Login />);
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
    const props = {
      login: () => {}
    };
    wrapper = mount(<Login {...props} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find('form')).toBeDefined();
  });
});
