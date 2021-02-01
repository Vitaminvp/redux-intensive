// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { uiActions } from '../../../ui/action';

export function* updatePassword({ payload: { oldPassword, newPassword } }) {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.profile.updateProfile, [
      { oldPassword, newPassword },
    ]);
    const { data: updatedProfile, message } = yield apply(
        response,
        response.json
    );
    console.log(updatedProfile)
    if (response.status !== 200) throw new Error(message);

  } catch (err) {
    yield put(uiActions.emitError(err, 'updatePassword worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
