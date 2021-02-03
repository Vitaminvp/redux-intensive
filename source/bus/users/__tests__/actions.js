import { usersActions } from '../actions';
import { types } from '../types';

describe('user actions:', () => {
  test('fetchUsersAsync', () => {
    expect(usersActions.fetchUsersAsync()).toEqual({
      type: types.FETCH_USERS_ASYNC,
    });
  });
  test('clearUsers', () => {
    expect(usersActions.clearUsers()).toEqual({
      type: types.CLEAR_USERS,
    });
  });
  test('fillUsers', () => {
    expect(usersActions.fillUsers(testData.users)).toEqual({
      type: types.FILL_USERS,
      payload: testData.users,
    });
  });
});
