import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import toJson from 'enzyme-to-json';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
