import { authActions } from '../action';
import { types } from '../types';

describe('auth actions:', () => {
  test('authenticate', () => {
    expect(authActions.authenticate()).toEqual({
      type: types.AUTHENTICATE,
    });
  });
  test('initialize', () => {
    expect(authActions.initialize()).toEqual({
      type: types.INITIALIZE,
    });
  });
  test('logout', () => {
    expect(authActions.logout()).toEqual({
      type: types.LOGOUT,
    });
  });
  test('signOutAsync', () => {
    expect(authActions.signUpAsync(testData.userProfile)).toEqual({
      type: types.SIGN_UP_ASYNC,
      payload: testData.userProfile,
    });
  });
  test('loginAsync', () => {
    expect(authActions.loginAsync(testData.credentials)).toEqual({
      type: types.LOGIN_ASYNC,
      payload: window.testData.credentials,
    });
  });
  test('authenticateAsync', () => {
    expect(authActions.authenticateAsync()).toEqual({
      type: types.AUTHENTICATE_ASYNC,
    });
  });
  test('initializeAsync', () => {
    expect(authActions.initializeAsync()).toEqual({
      type: types.INITIALIZE_ASYNC,
    });
  });
  test('logoutAsync', () => {
    expect(authActions.logoutAsync()).toEqual({
      type: types.LOGOUT_ASYNC,
    });
  });
});
