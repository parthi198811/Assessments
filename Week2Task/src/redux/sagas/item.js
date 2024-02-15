import {call, fork, put, take} from 'redux-saga/effects';
import {request, success, failure} from '@redux/features/item/ItemSlice';
import {TestApiHelper} from '@helpers';

function callGetRequest(url, data = {}, headers = {}) {
  return TestApiHelper.get(url);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      let response = yield call(callGetRequest, payload.url);
      yield put(success(response));
    } catch (ex) {
      yield put(failure(ex));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
