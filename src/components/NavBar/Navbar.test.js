import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '.';

describe('<Narbar Component />', () => {
  it('should', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
