import { takeLatest, all } from 'redux-saga/effects';
import { types as playlistsTypes } from '../repos/playlists';
import { types as tracksTypes } from '../repos/tracks';
import {
  fetchPlaylistsEffect,
  fetchPlaylistTracks,
} from './playlistsSaga';

export default function* root() {
  yield all([
    // @ts-ignore
    yield takeLatest(playlistsTypes.GET_PLAYLISTS_ASYNC, fetchPlaylistsEffect),
    // @ts-ignore
    yield takeLatest(tracksTypes.GET_PLAYLIST_TRACKS_ASYNC, fetchPlaylistTracks),
  ]);
}
