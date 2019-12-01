import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { HomePage } from './HomePage.tsx';

describe('Render Home Component', () => {
  it('renders without crashing', () => {
    const home = shallow(<HomePage />);
    expect(home).toMatchSnapshot();
  });
});
