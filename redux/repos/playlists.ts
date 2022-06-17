/*
  Optei por utilizar o duck pattern para criar os reducers e actions.
  Com isso, tanto os tipos das actions e os action creators quanto os reducers são criados
  em um arquivo único, facilitando a leitura e manutenção do código.
*/

import { SpotifyPlaylist } from "../../types";

const typesPrefix = '@playlists';

export const types = {
  SET_PLAYLISTS: `${typesPrefix}/SET_PLAYLISTS`,
  SET_LOADING: `${typesPrefix}/SET_LOADING`,
  GET_PLAYLISTS_ASYNC: `${typesPrefix}/GET_PLAYLISTS_ASYNC`,
};

const INITIAL_STATE = {
  isLoading: false,
  href: '',
  items: [],
  limit: 20,
  offset: 0,
  previous: null,
  total: 0,
};


export interface PlaylistsReducer {
  isLoading: boolean;
  href: string;
  items: SpotifyPlaylist[];
  limit: number;
  offset: number;
  previous: string | null;
  total: number;
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_PLAYLISTS:
      return { ...state, ...action.payload };
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const setToken = (token: string) => ({
  type: types.SET_PLAYLISTS,
  payload: token,
});

export const setIsLoading = (isLoading: boolean) => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

export const getPlayListsAsync = (onSuccess = () => { }, onError = () => { }, search = 'Em alta') => ({
  type: types.GET_PLAYLISTS_ASYNC,
  payload: { search, onSuccess, onError },
});

export const allActions = {
  setToken,
  setIsLoading,
  getPlayListsAsync,
};
