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
  clearPost: () => ({
    type: types.CLEAR_POSTS,
  }),
  removePost: postId => ({
    type: types.REMOVE_POST,
    payload: postId,
  }),
  likePost: likedPostData => ({
    type: types.LIKE_POST,
    payload: likedPostData,
  }),
  unlikePost: likedPostData => ({
    type: types.UNLIKE_POST,
    payload: likedPostData,
  }),
  unlikePostAsync: postId => ({
    type: types.UNLIKE_POST_ASYNC,
    payload: postId,
  }),
  likePostAsync: postId => ({
    type: types.LIKE_POST_ASYNC,
    payload: postId,
  }),

  removePostAsync: postId => ({
    type: types.REMOVE_POST_ASYNC,
    payload: postId,
  }),
  fetchPostsAsync: () => ({
    type: types.FETCH_POSTS,
  }),
  createPostAsync: comment => ({
    type: types.CREATE_POST_ASYNC,
    payload: comment,
  }),
};
