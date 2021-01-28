// Types
import { types } from './types';

export const authActions = {
  authenticate: () => {
    return {
      type: types.AUTHENTICATE,
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
};
