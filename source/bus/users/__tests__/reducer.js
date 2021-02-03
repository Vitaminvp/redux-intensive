import { fromJS, List, Map } from 'immutable';
import { usersReducer } from '../reducer';
import { usersActions } from '../actions';

const initialState = List();

describe('user reducer:', () => {
  test('should return initial state by default', () => {
    expect(usersReducer(void 0, {})).toEqual(initialState);
  });
  test('should handle fillUsers', () => {
    expect(
      usersReducer(void 0, usersActions.fillUsers(testData.users))
    ).toEqual(fromJS(testData.users));
  });
  test('should handle clearUsers', () => {
    expect(usersReducer(void 0, usersActions.clearUsers())).toEqual(
      initialState.clear()
    );
  });
});
