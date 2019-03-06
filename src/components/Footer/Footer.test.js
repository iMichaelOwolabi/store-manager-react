import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

describe('Test the 404 Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
