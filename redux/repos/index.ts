import { combineReducers } from 'redux';
import login from './login';
import playlists from './playlists';

export default combineReducers({
  login,
  playlists,
});
