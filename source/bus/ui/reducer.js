// Core
import { Map } from 'immutable';

// Instruments
import { types } from './types';

const initialState = new Map({
  isFetching: false
});

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_FETCHING:
      return state.set('isFetching', true);
    case types.STOP_FETCHING:
      return state.set('isFetching', false);
    default:
      return state;
  }
};
