// Core
import { put, apply, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

// Instruments
import { api } from '../../../API';
import { uiActions } from '../../ui/action';
import { profileActions } from '../../profile/action';
import { authActions } from '../action';
import { signUp } from '../saga/workers';

const signUpActions = authActions.signUpAsync(testData.userProfile);

const saga = cloneableGenerator(signUp)(signUpActions);

let clone = null;

describe('signUp saga"', () => {
  describe('should pass until response received', () => {
    test('should dispatch "startFetching" action', () => {
      expect(saga.next().value).toEqual(put(uiActions.startFetching()));
    });

    test('should call a fetch request', () => {
      expect(saga.next().value).toEqual(
        apply(api, api.auth.signUp, [testData.userProfile])
      );
      clone = saga.clone();
    });
  });

  describe('should handle a 400 status response', () => {
    test('a fetch request should return a 400 status response', () => {
      expect(clone.next(testData.fetchResponseFail400).value).toEqual(
        apply(testData.fetchResponseFail400, testData.fetchResponseFail400.json)
      );
    });

    test('should contain a response data object', () => {
      expect(clone.next(testData.responseDataFail).value).toEqual(
        put(uiActions.emitError(testData.error, 'signUp worker'))
      );
    });

    test('should dispatch "stopFetching" action', () => {
      expect(clone.next().value).toEqual(put(uiActions.stopFetching()));
    });

    test('should finish', () => {
      expect(clone.next().done).toBe(true);
    });
  });
  describe('should handle a 200 status response', () => {
    test('a fetch request should return a 200 status response data object', () => {
      expect(saga.next(testData.fetchResponseSuccess).value).toEqual(
        apply(testData.fetchResponseSuccess, testData.fetchResponseSuccess.json)
      );
    });
    test('should dispatch "fillProfile" action', () => {
      expect(saga.next(testData.responseDataSuccess).value).toEqual(
        put(profileActions.fillProfile(testData.userProfile))
      );
    });

    // test('should dispatch "fillProfile" action', () => {
    //   expect(saga.next(testData.responseDataSuccess).value)
    //     .toMatchInlineSnapshot();
    // });
    //
    // test('should dispatch "authenticate" action', () => {
    //   expect(saga.next().value)
    //       .toMatchInlineSnapshot();
    // });

    test('should dispatch "authenticate" action', () => {
      expect(saga.next().value).toEqual(put(authActions.authenticate()))
    });

    test('should dispatch "stopFetching" action', () => {
      expect(saga.next().value).toEqual(put(uiActions.stopFetching()));
    });

    test('should finish', () => {
      expect(saga.next().done).toBe(true);
    });
  });
});
