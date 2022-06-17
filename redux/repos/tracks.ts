/*
  Optei por utilizar o duck pattern para criar os reducers e actions.
  Com isso, tanto os tipos das actions e os action creators quanto os reducers são criados
  em um arquivo único, facilitando a leitura e manutenção do código.
*/

import { SpotifyTrack } from "../../types";

const typesPrefix = '@tracks';

export const types = {
  SET_TRACKS: `${typesPrefix}/SET_TRACKS`,
  SET_LOADING: `${typesPrefix}/SET_LOADING`,
  GET_PLAYLIST_TRACKS_ASYNC: `${typesPrefix}/GET_PLAYLIST_TRACKS_ASYNC`,
};

export interface TracksReducer {
  isLoading: boolean;
  href: string;
  items: SpotifyTrack[];
  limit: number;
  offset: number;
  total: number;
}

const INITIAL_STATE = {
  isLoading: false,
  tracks: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_TRACKS:
      return { ...state, ...action.payload };
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const setTracks = (tracks: string) => ({
  type: types.SET_TRACKS,
  payload: tracks,
});

export const setIsLoading = (isLoading: boolean) => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

interface GetPlaylistTracksAsyncParams {
  id: string;
  onSuccess?: (data: SpotifyTrack[]) => void;
  onError?: (error: Error) => void;
}

export const getPlaylistTracksAsync = (payload: GetPlaylistTracksAsyncParams) => ({
  type: types.GET_PLAYLIST_TRACKS_ASYNC,
  payload,
});

export const allActions = {
  setTracks,
  setIsLoading,
  getPlaylistTracksAsync,
};
