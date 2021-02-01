// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { uiActions } from '../../../ui/action';
import { profileActions } from '../../action';

export function* updateName({ payload: { firstName, lastName } }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.profile.updateProfile, [
      { firstName, lastName },
    ]);
    const { data: updatedProfile, message } = yield apply(
      response,
      response.json
    );

    if (response.status !== 200) throw new Error(message);

    yield put(profileActions.fillProfile(updatedProfile));
  } catch (err) {
    yield put(uiActions.emitError(err, 'updateName worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
