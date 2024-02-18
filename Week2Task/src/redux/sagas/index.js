import {fork} from 'redux-saga/effects';
import user from './user';
import userprofile from './userprofile';
import item from './item';

export default function* rootSaga() {
  yield fork(user);
  yield fork(userprofile);
  // yield fork(item);
}
