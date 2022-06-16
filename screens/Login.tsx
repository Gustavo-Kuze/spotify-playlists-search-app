import { useEffect, FC } from "react";
import { Button, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { setToken as setTokenAction } from '../redux/repos/login'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Playlists: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: FC<Props> = ({
  navigation: { navigate },
}) => {
  const dispatch = useDispatch();
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: "1ca9457fdc4843d0ade2358ab67465a8",
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
      ],
      usePKCE: false,
      redirectUri: "exp://127.0.0.1:19000/",
    },
    {
      authorizationEndpoint: "https://accounts.spotify.com/authorize",
      tokenEndpoint: "https://accounts.spotify.com/api/token",
    }
  );

  useEffect(() => {
    if (response?.type === "success") {
      console.log('token')
      console.log(response.params.access_token);
      const { access_token } = response.params;

      dispatch(setTokenAction(access_token));

      navigate("Playlists");
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button
        title="Login with Spotify"
        onPress={() => {
          promptAsync();
        }}
      />
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

export default Login;
