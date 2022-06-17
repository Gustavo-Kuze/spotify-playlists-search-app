import axios from "axios";

export const getFeaturedPlaylists = async (token) => {
  try {
    const response = await axios("https://api.spotify.com/v1/me/top/tracks?time_range=short_term", {
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
  }
}

export const getPlaylists = async (token, search) => {
  try {
    const response = await axios(`https://api.spotify.com/v1/search?type=playlist&q=${search}`, {
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
