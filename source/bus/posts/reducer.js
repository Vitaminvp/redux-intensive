// Core
import { fromJS, List } from 'immutable';

// Instruments
import { FILL_POSTS, CREATE_POST } from './types';

const initialState = List();

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILL_POSTS:
      return fromJS(payload);
    case CREATE_POST:
      return state.unshift(fromJS(payload));
    default:
      return state;
  }
};
