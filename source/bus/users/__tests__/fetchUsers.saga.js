// Core
import { put, apply } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

// Instruments
import { api } from '../../../API';
import { uiActions } from '../../ui/action';
import { usersActions } from '../actions';
import { fetchUsers } from '../saga/workers';

const fetchUsersAction = usersActions.fetchUsersAsync();

const saga = cloneableGenerator(fetchUsers)(fetchUsersAction);

let clone = null;

describe('fetchUsers saga"', () => {
  describe('should pass until response received', () => {
    test('should dispatch "startFetching" action', () => {
      expect(saga.next().value).toEqual(put(uiActions.startFetching()));
    });

    test('should call a fetch request', () => {
      expect(saga.next().value).toEqual(apply(api, api.users.fetch));
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
        put(uiActions.emitError(testData.error, 'fetchUsers worker'))
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
      expect(saga.next(testData.fetchUsersSuccess).value).toEqual(
        apply(testData.fetchUsersSuccess, testData.fetchUsersSuccess.json)
      );
    });
    test('should dispatch "fillProfile" action', () => {
      expect(saga.next(testData.responseUsersSuccess).value).toEqual(
        put(usersActions.fillUsers(testData.users))
      );
    });

    test('should dispatch "stopFetching" action', () => {
      expect(saga.next().value).toEqual(put(uiActions.stopFetching()));
    });

    test('should finish', () => {
      expect(saga.next().done).toBe(true);
    });
  });
});
