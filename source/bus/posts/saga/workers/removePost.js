// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/action';

export function* removePost({ payload: postId }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.post.remove, [postId]);

    if (response.status !== 204) {
      const { message } = yield apply(response, response.json);

      throw new Error(message);
    }

    yield put(postActions.removePost(postId));
  } catch (err) {
    yield put(uiActions.emitError(err, 'removePost worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
