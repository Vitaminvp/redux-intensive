// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { uiActions } from '../../../ui/action';
import { profileActions } from '../../action';
import { actions } from 'react-redux-form';

export function* updateAvatar({ payload: [newAvatar] }) {
  try {
    yield put(uiActions.startFetching());

    const avatarFormData = yield new FormData();
    yield apply(avatarFormData, avatarFormData.append, ['avatar', newAvatar]);

    const response = yield apply(api, api.profile.updateAvatar, [
      avatarFormData,
    ]);
    const { data: newAvatarUrl, message } = yield apply(
      response,
      response.json
    );

    if (response.status !== 200) throw new Error(message);

    yield put(profileActions.updateAvatar(newAvatarUrl));
    yield put(actions.reset('forms.user.profile.avatar'));
  } catch (err) {
    yield put(uiActions.emitError(err, 'updateAvatar worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
