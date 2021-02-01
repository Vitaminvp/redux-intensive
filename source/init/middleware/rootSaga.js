// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchPost } from '../../bus/posts/saga/watchers';
import { watchAuth } from '../../bus/auth/saga/watchers';
import { watchUsers } from '../../bus/users/saga/watchers';
import { watchProfile } from '../../bus/profile/saga/watchers';

function* rootSaga() {
  yield all([
    call(watchPost),
    call(watchAuth),
    call(watchUsers),
    call(watchProfile),
  ]);
}

export default rootSaga;
