import React from 'react';
import { shallow } from 'enzyme';
import { theProduct } from '.';

describe('Test the 404 Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<theProduct />);
    expect(wrapper).toMatchSnapshot();
  });
});
