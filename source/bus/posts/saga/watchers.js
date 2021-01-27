// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { createPost } from './workers';
import { fetchPosts } from './workers';

function* watchCreatePost() {
  yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}
function* watchFetchPosts() {
  yield takeEvery(types.FETCH_POSTS, fetchPosts);
}

export function* watchPost() {
  yield all([call(watchCreatePost), call(watchFetchPosts)]);
}
