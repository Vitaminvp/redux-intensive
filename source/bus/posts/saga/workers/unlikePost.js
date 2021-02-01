// Core
import { put, apply, select } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/action';

export function* unlikePost({ payload: postId }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.post.like, [postId]);

    if (response.status !== 204) {
      const { message } = yield apply(response, response.json);

      throw new Error(message);
    }

    const userId = yield select(({ profile }) => profile.get('id'));

    yield put(postActions.unlikePost({ postId, userId }));
  } catch (err) {
    yield put(uiActions.emitError(err, 'unlikePost worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
