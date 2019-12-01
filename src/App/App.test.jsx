import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { App } from './App.tsx';
describe('Render App component', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
