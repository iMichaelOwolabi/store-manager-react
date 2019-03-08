import React from 'react';
import { shallow } from 'enzyme';
import NewProduct from '.';

describe('Test the 404 Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NewProduct />);
    expect(wrapper).toMatchSnapshot();
  });
});
