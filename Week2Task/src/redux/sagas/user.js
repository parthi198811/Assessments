import {call, fork, put, select, take} from 'redux-saga/effects';
import {request, success, failure} from '@redux/features/user/UserSlice';
import {TestApiHelper} from '@helpers';

function callPostRequest(url, data, headers = {}) {
  return TestApiHelper.post(url, data, headers);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);
    const accessToken = yield select(state => state.user.data?.accessToken);

    try {
      let response = yield call(
        callPostRequest,
        payload.url,
        payload.data,
        accessToken
          ? {
              'X-Access-Token': accessToken,
            }
          : {},
      );
      yield put(success(response));
    } catch (ex) {
      yield put(failure(ex));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
