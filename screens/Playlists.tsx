import axios from "axios";
import { useEffect, FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

const Playlists: FC = () => {

  const { token } = useSelector((state: any) => state.login);

  // useEffect(() => {
  //   if (token) {
  //     axios("https://api.spotify.com/v1/me/top/tracks?time_range=short_term", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //       .then((response) => {
  //         console.log("response", response);
  //       })
  //       .catch((error) => {
  //         console.log("error", error.message);
  //       });
  //   }
  // }, [token]);

  return (
    <View style={styles.container}>
      <Text>Playlists</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Playlists;
