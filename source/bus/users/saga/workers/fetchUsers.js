// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { uiActions } from '../../../ui/action';
import { usersActions } from '../../actions';

export function* fetchUsers() {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.users.fetch);
    const { data: users, message } = yield apply(response, response.json);

    if (response.status !== 200) throw new Error(message);

    yield put(usersActions.fillUsers(users));
  } catch (err) {
    yield put(uiActions.emitError(err, 'fetchUsers worker '));
  } finally {
    yield put(uiActions.stopFetching());
  }
}
