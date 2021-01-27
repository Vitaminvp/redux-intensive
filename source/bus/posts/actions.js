// Types
import { types } from './types';

export const postActions = {
  fillPosts: posts => ({
    type: types.FILL_POSTS,
    payload: posts,
  }),
  createPost: post => ({
    type: types.CREATE_POST,
    payload: post,
  }),
  fetchPostsAsync: () => ({
    type: types.FETCH_POSTS,
  }),
  createPostAsync: comment => ({
    type: types.CREATE_POST_ASYNC,
    payload: comment,
  }),
};
