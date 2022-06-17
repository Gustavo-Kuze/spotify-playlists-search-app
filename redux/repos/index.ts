import { combineReducers } from 'redux';
import login from './login';
import playlists from './playlists';
import tracks from './tracks';

export default combineReducers({
  login,
  playlists,
  tracks,
});
