import { takeLatest, all } from 'redux-saga/effects';
import { types as loginTypes } from '../repos/login';
import {
  fetchLoginEffect
} from './loginSaga';

export default function* root() {
  yield all([
    yield takeLatest(loginTypes.GET_TOKEN_ASYNC, fetchLoginEffect),
  ]);
}
