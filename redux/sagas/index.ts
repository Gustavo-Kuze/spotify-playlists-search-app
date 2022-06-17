import { takeLatest, all } from 'redux-saga/effects';
import { types as playlistsTypes } from '../repos/playlists';
import {
  fetchPlaylistsEffect
} from './playlistsSaga';

export default function* root() {
  yield all([
    // @ts-ignore
    yield takeLatest(playlistsTypes.GET_PLAYLISTS_ASYNC, fetchPlaylistsEffect),
  ]);
}
