import React from 'react';
import { shallow } from 'enzyme';
import Home from '..';

describe('Test the 404 Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
