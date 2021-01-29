// Types
import { types } from './types';

export const authActions = {
  authenticate: () => {
    return {
      type: types.AUTHENTICATE,
    };
  },
  initialize: () => {
    return {
      type: types.INITIALIZE,
    };
  },
  initializeAsync: () => {
    return {
      type: types.INITIALIZE_ASYNC,
    };
  },
  signUpAsync: userData => {
    return {
      type: types.SIGN_UP_ASYNC,
      payload: userData,
    };
  },
  loginAsync: credentials => {
    return {
      type: types.LOGIN_ASYNC,
      payload: credentials,
    };
  },
  authenticateAsync: credentials => {
    return {
      type: types.AUTHENTICATE_ASYNC,
    };
  },
};
