import axios from "axios";

export const getPlaylists = async (token, search, filter) => {
  try {
    const response = await axios(`https://api.spotify.com/v1/search?type=playlist&q=${!!filter ? `genre:${filter}+` : ''}${search || filter || 'Em alta'}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    return response.data;
  } catch (error) {
    console.log("error", error.message);
    return {};
  }
}

export const getPlaylistTracks = async (token, playListId) => {
  try {
    const response = await axios(`https://api.spotify.com/v1/playlists/${playListId}/tracks`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    return response.data;
  } catch (error) {
    console.log("error", error.message);
    return {};
  }
}
