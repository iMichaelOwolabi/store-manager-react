import React from 'react';
import { shallow } from 'enzyme';
import Product from '.';

describe('Test the 404 Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toMatchSnapshot();
  });
});
