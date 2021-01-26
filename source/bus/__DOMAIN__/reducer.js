// Instruments
import { types } from './types';

const initialState = {};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TYPES:
      return state;
    default:
      return state;
  }
};
