// Types
import { types } from './types';

export const usersActions = {
  fetchUsersAsync: () => {
    return {
      type: types.FETCH_USERS_ASYNC,
    };
  },
  clearUsers: () => {
    return {
      type: types.CLEAR_USERS,
    };
  },
  fillUsers: users => {
    return {
      type: types.FILL_USERS,
      payload: users,
    };
  },
};
