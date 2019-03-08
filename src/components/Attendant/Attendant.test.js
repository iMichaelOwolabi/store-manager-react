import React from 'react';
import { shallow } from 'enzyme';
import Attendant from '.';

describe('<Narbar Component />', () => {
  it('should', () => {
    const wrapper = shallow(<Attendant />);
    expect(wrapper).toMatchSnapshot();
  });
});
