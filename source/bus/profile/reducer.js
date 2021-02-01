// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
  id: '',
  firstName: '',
  lastName: '',
  avatar: '',
  token: '',
});

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILL_PROFILE:
      return state.merge(payload);

    case types.CLEAR_PROFILE:
      return state.clear();

    case types.UPDATE_AVATAR:
      return state.set('avatar', payload);

    default:
      return state;
  }
};
