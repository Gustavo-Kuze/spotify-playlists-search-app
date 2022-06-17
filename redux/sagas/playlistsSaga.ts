import { put, call, select } from 'redux-saga/effects';
import { getPlaylists } from '../../services/playlists';

import { types as playlistsTypes } from '../repos/playlists';

function* fetchPlaylistsEffect({ payload: { search, onSuccess, onError } }) {
  yield put({
    type: playlistsTypes.SET_LOADING,
    payload: true,
  });

  const token = yield select(state => state.login.token);

  const response = yield call(() => getPlaylists(token, search));

  if (!!response && !!response.playlists) {
    yield put({
      type: playlistsTypes.SET_PLAYLISTS,
      payload: response.playlists,
    });

    onSuccess();
  } else {
    onError();
  }

  yield put({
    type: playlistsTypes.SET_LOADING,
    payload: false,
  });
}

export {
  fetchPlaylistsEffect
};
