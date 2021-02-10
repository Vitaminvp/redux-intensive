// Core
import { actions } from 'react-redux-form';
import { apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
// Instruments
import { api } from '../../../API';
import { uiActions } from '../../ui/action';
import { authActions } from '../action';
import { authenticate } from '../saga/workers';

describe('authenticate', () => {
  test('should complete a 200 status response scenario', async () => {
    await expectSaga(authenticate)
      .put(uiActions.startFetching())
      .provide([
        [apply(api, api.auth.authenticate), testData.fetchResponseSuccess],
      ])
      .apply(localStorage, localStorage.setItem, ['token', testData.token])
      .put(
        actions.change(
          'forms.user.profile.firstName',
          testData.userProfile.firstName
        )
      )
      .put(
        actions.change(
          'forms.user.profile.lastName',
          testData.userProfile.lastName
        )
      )
      .put(authActions.authenticate())
      .put(authActions.initialize())
      .put(uiActions.stopFetching())
      .run();
  });

  test('should complete a 401 status response scenario', async () => {
    await expectSaga(authenticate)
      .put(uiActions.startFetching())
      .provide([
        [apply(api, api.auth.authenticate), testData.fetchResponseFail401],
      ])
      .apply(localStorage, localStorage.removeItem, ['token'])
      .apply(localStorage, localStorage.removeItem, ['remember'])
      .returns(void 0)
      .put(authActions.initialize())
      .put(uiActions.stopFetching())
      .run();
  });

  test('should complete a 400 status response scenario', async () => {
    await expectSaga(authenticate)
      .put(uiActions.startFetching())
      .provide([
        [apply(api, api.auth.authenticate), testData.fetchResponseFail400],
      ])

      .put(uiActions.emitError(testData.error, 'authenticate worker'))
      .put(authActions.initialize())
      .put(uiActions.stopFetching())
      .run();
  });
});
