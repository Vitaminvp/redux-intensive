// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { uiActions } from '../../../ui/action';
import { profileActions } from '../../../profile/action';
import { authActions } from '../../action';

export function* authenticate() {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.auth.authenticate);
    const { data: profile, message } = yield apply(response, response.json);

    if (response.status === 401) {
      yield apply(localStorage, localStorage.removeItem, ['token']);
      yield apply(localStorage, localStorage.removeItem, ['remember']);
      return;
    }

    if (response.status !== 200) throw new Error(message);

    yield apply(localStorage, localStorage.setItem, ['token', profile.token]);

    yield put(profileActions.fillProfile(profile));

    yield put(authActions.authenticate());
  } catch (err) {
    yield put(uiActions.emitError(err, 'authenticate worker'));
  } finally {
    yield put(uiActions.stopFetching());
    yield put(authActions.initialize());
  }
}
