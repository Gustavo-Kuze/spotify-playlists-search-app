import { put, call, select } from 'redux-saga/effects';
import { getPlaylists } from '../../services/playlists';

import { types as playlistsTypes } from '../repos/playlists';

function* fetchPlaylistsEffect({ payload: { search, filter, onSuccess, onError } }) {
  yield put({
    type: playlistsTypes.SET_LOADING,
    payload: true,
  });

  const token = yield select(state => state.login.token);

  const response = yield call(() => getPlaylists(token, search, filter));

  if (!!response && !!response.playlists) {
    yield put({
      type: playlistsTypes.SET_PLAYLISTS,
      payload: response.playlists,
    });

    if (typeof onSuccess === 'function') {
      onSuccess();
    }
  } else {
    if (typeof onError === 'function') {
      onError(new Error('Error fetching playlists'));
    }
  }

  yield put({
    type: playlistsTypes.SET_LOADING,
    payload: false,
  });
}

export {
  fetchPlaylistsEffect
};
