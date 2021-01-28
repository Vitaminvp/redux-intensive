// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signUp } from './workers';
import { login } from './workers';


function* watchSignUp() {
  yield takeEvery(types.SIGN_UP_ASYNC, signUp);
}
function* watchLogin() {
  yield takeEvery(types.LOGIN_ASYNC, login);
}

export function* watchAuth() {
  yield all([call(watchSignUp), call(watchLogin)]);
}
