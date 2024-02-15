import {call, fork, put, take} from 'redux-saga/effects';
import {request} from '@redux/features/item/ItemSlice';
import ApiHelper from '../../helpers/ApiHelper';
import {failure, success} from '../features/item/ItemSlice';

function callGetRequest(url, data = {}, headers = {}) {
  return ApiHelper.get(url);
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
