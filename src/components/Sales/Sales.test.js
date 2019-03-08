import React from 'react';
import { shallow } from 'enzyme';
import Sales from '.';

describe('Test the 404 Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Sales />);
    expect(wrapper).toMatchSnapshot();
  });
});
