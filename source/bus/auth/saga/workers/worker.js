// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { uiActions } from '../../../ui/action';

export function* worker() {
  try {
    yield put(uiActions.startFetching());
    const response = yield call(api.post.fetch);
    const { data: posts, message } = yield apply(response, response.json);

    if (response.status !== 200) throw new Error(message);

  } catch (err) {
    yield put(uiActions.emitError(err, 'createPost worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}

