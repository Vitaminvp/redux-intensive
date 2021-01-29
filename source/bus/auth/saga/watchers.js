// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signUp, login, initialize, authenticate } from './workers';

function* watchSignUp() {
  yield takeEvery(types.SIGN_UP_ASYNC, signUp);
}
function* watchLogin() {
  yield takeEvery(types.LOGIN_ASYNC, login);
}
function* watchAuthenticate() {
  yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}
function* watchInitialize() {
  yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}

export function* watchAuth() {
  yield all([
    call(watchSignUp),
    call(watchLogin),
    call(watchAuthenticate),
    call(watchInitialize),
  ]);
}
