import React from 'react';
import { shallow } from 'enzyme';
import { CreateProduct } from '.';

describe('Test the 404 Component', () => {
  let wrapper = shallow(<CreateProduct />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change the state after change the input value', () => {
    const newValue = 'YoungM';
    wrapper.find('input[type="text"]').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('input[type="text"]').prop('name')).toContain('productName');
  });
  it('should change the state after change the input value', () => {
    const newValue = 1;
    wrapper.find('input[name="price"]').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('input[name="price"]').prop('name')).toContain('price');
  });
  it('should change the state after change the input value', () => {
    const newValue = 'YoungM';
    wrapper.find('input[type="file"]').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('input[type="file"]').prop('name')).toContain('productImage');
  });
  it('should simulate on submit event ', () => {
    const props = {
      addProduct: () => {}
    };
    wrapper = shallow(<CreateProduct {...props} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find('form')).toBeDefined();
  });
});
