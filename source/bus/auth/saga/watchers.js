// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signUp } from './workers';


function* watchSignUp() {
  yield takeEvery(types.SIGN_UP_ASYNC, signUp);
}

export function* watchAuth() {
  yield all([call(watchSignUp)]);
}
