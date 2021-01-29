// Core
import { fromJS, List } from 'immutable';

// Instruments
import { types } from './types';

const initialState = List();

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILL_POSTS:
      return fromJS(payload);
    case types.CREATE_POST:
      return state.unshift(fromJS(payload));
    case types.CLEAR_POSTS:
      return state.clear();
    case types.REMOVE_POST:
      return state.filter(post => payload !== post.get('id'));
    case types.LIKE_POST:
      return state.updateIn(
        [state.findIndex(post => post.get('id') === payload.postId), 'likes'],
        likes => likes.unshift(payload.liker)
      );
    case types.UNLIKE_POST:
      return state.updateIn(
        [state.findIndex(post => post.get('id') === payload.postId), 'likes'],
        likes => likes.filter(like => like.get('id') !== payload.likeId)
      );
    default:
      return state;
  }
};
