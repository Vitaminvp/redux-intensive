// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchPost } from '../../bus/posts/saga/watchers';
import { watchAuth } from '../../bus/auth/saga/watchers';

function* rootSaga() {
  yield all([call(watchPost), call(watchAuth)]);
}

export default rootSaga;
