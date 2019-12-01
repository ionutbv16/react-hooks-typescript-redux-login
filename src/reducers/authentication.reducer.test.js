import React from 'react';

import { authentication } from './authentication.reducer';

describe('Test authentication reducer', () => {
  it('On correct Authentication show proper result', () => {
    const successAuthResponse = {
      type: 'USERS_LOGIN_SUCCESS',
      user: {
        id: 1,
        username: 'email@email.com',
        firstName: 'John',
        lastName: 'Smith',
        token: 'fake-jwt-token',
      },
    };
    const expectedSuccess = {
      loggedIn: true,
      user: {
        id: 1,
        username: 'email@email.com',
        firstName: 'John',
        lastName: 'Smith',
        token: 'fake-jwt-token',
      },
    };
    const result = authentication('', successAuthResponse);
    expect(result).toEqual(expectedSuccess);
  });
});

describe('Test authentication reducer', () => {
  it('On failed Authentication show proper result', () => {
    const failedAuthResponse = {
      type: 'USERS_LOGIN_FAILURE',
      error: 'Username or password is incorrect',
    };
    const expectedFailed = { loggedInFailed: true };
    const result = authentication(failedAuthResponse, '');
    expect(result).toEqual(expectedFailed);
  });
});
