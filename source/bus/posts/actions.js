// Types
import { types } from './types';

// Instruments
import { api } from '../../API';

export const postActions = {
  fillPosts: posts => {
    return {
      type: types.FILL_POSTS,
      payload: posts,
    };
  },
  createPost: post => {
    return {
      type: types.CREATE_POST,
      payload: post,
    };
  },
  fetchPostsAsync: () => async (dispatch, getState) => {
    dispatch({
      type: types.FETCH_POSTS_ASYNC,
    });

    const response = await api.post.fetch();
    const { data } = await response.json();

    dispatch(postActions.fillPosts(data));
  },
  createPostAsync: comment => ({
    type: types.CREATE_POST_ASYNC,
    payload: comment,
  }),
};
