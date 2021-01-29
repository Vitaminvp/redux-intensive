// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/action';

export function* fetchPosts() {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.post.fetch);
    const { data: posts, message } = yield apply(response, response.json);

    if (response.status !== 200) throw new Error(message);

    yield put(postActions.fillPosts(posts));
  } catch (err) {
    yield put(uiActions.emitError(err, 'fetchPosts worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}

