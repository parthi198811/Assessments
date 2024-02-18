import {call, fork, put, select, take} from 'redux-saga/effects';
import {
  request,
  success,
  failure,
} from '@redux/features/userprofile/UserProfileSlice';
import {TestApiHelper} from '@helpers';

function callGetRequest(url, data, headers = {}) {
  return TestApiHelper.get(url, data, headers);
}

function callPutRequest(url, data, headers = {}) {
  return TestApiHelper.put(url, data, headers);
}

function callPostRequest(url, data, headers = {}) {
  return TestApiHelper.post(url, data, headers);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);
    const accessToken = yield select(state => state.user.data?.accessToken);

    try {
      if (payload.method == 'PUT') {
        let response = yield call(
          callPutRequest,
          payload.url,
          payload.data,
          accessToken
            ? {
                'X-Access-Token': accessToken,
              }
            : {},
        );
        yield put(success(response));
      } else if (payload.method == 'POST') {
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
      } else {
        let response = yield call(
          callGetRequest,
          payload.url,
          payload.data,
          accessToken
            ? {
                'X-Access-Token': accessToken,
              }
            : {},
        );
        yield put(success(response));
      }
    } catch (ex) {
      yield put(failure(ex));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
