import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../helpers';

import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { AccountPage } from '../AccountPage';
import styled from 'styled-components';

const AppWrapper = styled('div')`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/account" component={AccountPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </AppWrapper>
  );
};

export { App };
