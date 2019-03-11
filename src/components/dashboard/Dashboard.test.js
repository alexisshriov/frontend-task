import React from 'react';
import { shallow } from 'enzyme';
import Dasboard from './Dashboard';

describe('MyComponent', () => {
  it('should render Dasboard correctly', () => {
    const component = shallow(<Dasboard />);
    expect(component).toMatchSnapshot();
  });
});