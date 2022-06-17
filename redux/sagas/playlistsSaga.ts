import { put, call, select } from 'redux-saga/effects';
import { getPlaylists, getPlaylistTracks } from '../../services/playlists';

import { types as playlistsTypes } from '../repos/playlists';
import { types as tracksTypes } from '../repos/tracks';

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

function* fetchPlaylistTracks({ payload: { id, onSuccess, onError } }) {

  yield put({
    type: tracksTypes.SET_LOADING,
    payload: true,
  });

  const token = yield select(state => state.login.token);

  const response = yield call(() => getPlaylistTracks(token, id));

  if (!!response && !!response.items) {
    yield put({
      type: tracksTypes.SET_TRACKS,
      payload: { ...response, items: response.items.map(item => item.track) },
    });

    if (typeof onSuccess === 'function') {
      onSuccess();
    }
  } else {
    if (typeof onError === 'function') {
      onError(new Error('Error fetching playlist tracks'));
    }
  }

  yield put({
    type: tracksTypes.SET_LOADING,
    payload: false,
  });
}

export {
  fetchPlaylistsEffect,
  fetchPlaylistTracks,
};
