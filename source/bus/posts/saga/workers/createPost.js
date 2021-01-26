// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { createPost as createPostAC } from '../../actions';

export function* createPost({ payload: comment }) {
  yield console.log('--------- createPost saga', comment);

  const response = yield apply(api, api.post.create, [comment]);
  const { data } = yield apply(response, response.json);
  yield put(createPostAC(data));
}
