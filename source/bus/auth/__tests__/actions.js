import { authActions } from '../action';
import { types } from '../types';

describe('auth actions:', () => {
  test('authenticate', () => {
    expect(authActions.authenticate()).toEqual({
      type: types.AUTHENTICATE,
    });
  });
});
