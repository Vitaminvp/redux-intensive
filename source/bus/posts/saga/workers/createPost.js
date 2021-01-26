// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/action';

export function* createPost({ payload: comment }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.post.create, [comment]);
    const { data: post, message } = yield apply(response, response.json);

    if (response.status !== 200) throw new Error(message);

    yield put(postActions.createPost(post));
  } catch (err) {
    yield put(uiActions.emitError(err, 'createPost worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
