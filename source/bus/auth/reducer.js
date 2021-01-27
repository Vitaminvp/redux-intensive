// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
  isAuthenticated: false,
});

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.AUTHENTICATE:
      return state.set('isAuthenticated', true);
    default:
      return state;
  }
};
