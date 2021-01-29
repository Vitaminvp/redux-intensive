// Core
import { put, apply, select } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/action';

export function* likePost({ payload: postId }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.post.like, [postId]);

    if (response.status !== 204) {
      const { message } = yield apply(response, response.json);

      throw new Error(message);
    }
    const liker = yield select(({ profile }) =>
      profile.removeAll(['avatar', 'token'])
    );
    yield put(postActions.likePost({ postId, liker }));
  } catch (err) {
    yield put(uiActions.emitError(err, 'likePost worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
