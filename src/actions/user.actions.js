import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from '.';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
};

function login(username, password) {
  return new Promise(function(resolve, reject) {
    userService.login(username, password).then(
      user => {
        history.push('/');
        resolve(success(user));
      },
      error => {
        resolve(failure(error.toString()));
      },
    );

    function success(user) {
      return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error) {
      return { type: userConstants.LOGIN_FAILURE, error };
    }
  });
}

function logout() {
  userService.logout();
  history.push('/');
  return { type: userConstants.LOGOUT };
}
