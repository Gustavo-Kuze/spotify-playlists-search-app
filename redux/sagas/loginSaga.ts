import { put, call } from 'redux-saga/effects';

import { types as loginTypes } from '../repos/login';

function* fetchLoginEffect() {
  yield put({
    type: loginTypes.SET_LOADING,
    payload: true,
  });

  const response = yield call(() => {});

  if (!response.error) {
    yield put({
      type: loginTypes.SET_TOKEN,
      payload: response.params.access_token,
    });
  }

  yield put({
    type: loginTypes.SET_LOADING,
    payload: false,
  });
}

export {
  fetchLoginEffect
};
