// Core
import { put, apply } from 'redux-saga/effects';
// Instruments
import { api } from '../../../../API';
// Actions
import { uiActions } from '../../../ui/action';
import { authActions } from '../../action';
import { profileActions } from '../../../profile/action';
import { postActions } from '../../../posts/actions';
import { usersActions } from '../../../users/actions';

export function* logout() {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.auth.logout);

    if (response.status !== 204) {
      const { message } = yield apply(response, response.json);

      throw new Error(message);
    }
  } catch (err) {
    yield put(uiActions.emitError(err, 'logout worker'));
  } finally {
    yield apply(localStorage, localStorage.removeItem, ['token']);
    yield apply(localStorage, localStorage.removeItem, ['remember']);

    yield put(usersActions.clearUsers());
    yield put(postActions.clearPost());
    yield put(profileActions.clearProfile());
    yield put(authActions.logout());
    yield put(uiActions.stopFetching());
  }
}
