import React from 'react';
import { shallow } from 'enzyme';
import { ViewSingleProduct } from '.';

describe('Test the single Products Component', () => {
  const props = {
    product: {
      theProduct: {
        product: {
          productimage: '',
          productname: '',
          price: '',
          quantity: '',
          mininventoryqty: ''
        }
      }
    },
    history: {
      location: {
        pathname: ''
      }
    },
    getProduct: () => {}
  };
  const wrapper = shallow(<ViewSingleProduct {...props} />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the state after change the input value', () => {
    const newValue = 'YoungM';
    wrapper.find('input[type="number"]').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('input[type="number"]').prop('name')).toContain('quantity');
  });
});
