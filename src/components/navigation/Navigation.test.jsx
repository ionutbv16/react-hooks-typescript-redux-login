import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Navigation } from './Navigation.jsx';
jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ({
    authentication: { user: '' },
  }),
}));

describe('Render Navigation Component', () => {
  it('renders without crashing', () => {
    const navigation = shallow(<Navigation />);
    expect(navigation).toMatchSnapshot();
  });
});
