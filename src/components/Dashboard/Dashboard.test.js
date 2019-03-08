import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '.';

describe('<Narbar Component />', () => {
  it('should', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
