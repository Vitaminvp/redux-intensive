// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { uiActions } from '../../../ui/action';
import { profileActions } from '../../../profile/action';
import { authActions } from '../../action';

export function* signUp({ payload: userInfo }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.auth.signUp, [userInfo]);
    const { data: profile, message } = yield apply(response, response.json);

    if (response.status !== 200) throw new Error(message);

    yield put(profileActions.fillProfile(profile));

    yield put(authActions.authenticate());
  } catch (err) {
    yield put(uiActions.emitError(err, 'auth worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
