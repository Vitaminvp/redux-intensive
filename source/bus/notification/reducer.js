// Core
import { fromJS, List } from 'immutable';
// Instruments
import { types } from './types';

const initialState = List();

// initialState.unshift(fromJS({
//   id: 1,
//   message: 'test',
// }));

export const notificationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.SHOW_NOTIFICATION:
      return state.unshift(fromJS(payload));

    case types.HIDE_NOTIFICATION:
      return state.filter(notification => payload !== notification.get('id'));
    default:
      return state;
  }
};
