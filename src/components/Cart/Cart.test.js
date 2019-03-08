import React from 'react';
import { shallow } from 'enzyme';
import Cart from '.';

describe('<Narbar Component />', () => {
  it('should', () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper).toMatchSnapshot();
  });
});
