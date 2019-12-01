import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Navigation } from '../components/navigation/Navigation';
import { userActions } from '../actions';

export const AccountPage = () => {
  const user = useSelector(state => state.authentication.user);
  const dispatch = useDispatch();
  const callLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <Fragment>
      <Navigation />
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user && user.firstName}!</h1>
        <p>THis is your account</p>
        <p>
          <button onClick={callLogout}>Logout</button>
        </p>
      </div>
    </Fragment>
  );
};

/*
class HomePage extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.firstName}!</h1>
        <p>THis is your account</p>
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapState(state) {
  const { authentication } = state;
  const { user } = authentication;
  return { user };
}

const connectedHomePage = connect(mapState)(HomePage);
export { connectedHomePage as HomePage };
*/
