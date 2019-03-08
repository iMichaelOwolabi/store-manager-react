import React from 'react';
import { shallow } from 'enzyme';
import AuthNav from '.';

describe('<Narbar Component />', () => {
  it('should', () => {
    const wrapper = shallow(<AuthNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
