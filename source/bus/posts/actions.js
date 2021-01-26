// Types
import {
  FETCH_POSTS_ASYNC,
  FILL_POSTS,
  CREATE_POST,
  CREATE_POST_ASYNC,
} from './types';

// Instruments
import { api } from '../../API';

export const fillPosts = posts => {
  return {
    type: FILL_POSTS,
    payload: posts,
  };
};

export const createPost = post => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const fetchPostsAsync = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_POSTS_ASYNC,
  });

  const response = await api.post.fetch();
  const { data } = await response.json();

  dispatch(fillPosts(data));
};

export const createPostAsync = comment => ({
  type: CREATE_POST_ASYNC,
  payload: comment,

  // try {
  //   const response = await api.post.create(comment);
  //   const { data } = await response.json();
  //   dispatch(createPost(data));
  // } catch (error) {
  //   console.warn(error);
  // }
});
