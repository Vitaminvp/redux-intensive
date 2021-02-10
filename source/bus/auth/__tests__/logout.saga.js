// Core
import { put, apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';
import { expectSaga } from 'redux-saga-test-plan';
// Instruments
import { api } from '../../../API';
// Actions
import { uiActions } from '../../ui/action';
import { authActions } from '../action';
import { profileActions } from '../../profile/action';
import { postActions } from '../../posts/actions';
import { usersActions } from '../../users/actions';
import { authenticate, logout } from '../saga/workers';

describe('logout', () => {
  test('should complete a 204 status response scenario', async () => {
    await expectSaga(logout)
      .put(uiActions.startFetching())
      .provide([
        [apply(api, api.auth.logout), testData.fetchResponseSuccess204],
      ])
      .apply(localStorage, localStorage.removeItem, ['token'])
      .apply(localStorage, localStorage.removeItem, ['remember'])
      .put(actions.reset('forms.user'))
      .put(usersActions.clearUsers())
      .put(postActions.clearPost())
      .put(profileActions.clearProfile())
      .put(authActions.logout())
      .put(uiActions.stopFetching())
      .run();
  });

  test('should complete a fail status response scenario', async () => {
    await expectSaga(logout)
      .put(uiActions.startFetching())
      .provide([[apply(api, api.auth.logout), testData.fetchResponseFail400]])
      .put(uiActions.emitError(testData.error, 'logout worker'))
      .apply(localStorage, localStorage.removeItem, ['token'])
      .apply(localStorage, localStorage.removeItem, ['remember'])
      .put(actions.reset('forms.user'))
      .put(usersActions.clearUsers())
      .put(postActions.clearPost())
      .put(profileActions.clearProfile())
      .put(authActions.logout())
      .put(uiActions.stopFetching())
      .run();
  });
});
