import React from 'react';
import { shallow } from 'enzyme';
import ProductsCard from '.';

describe('Test the Products Card Component', () => {
  it('should match snapshot', () => {
    const props = {
      products: [{}]
    };
    const wrapper = shallow(<ProductsCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
