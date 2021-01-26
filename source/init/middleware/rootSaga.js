// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchPost } from '../../bus/posts/saga/watchers';

export function* rootSaga() {
  yield call(watchPost);
}
