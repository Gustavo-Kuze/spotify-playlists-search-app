import { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { StatusBar } from 'expo-status-bar';
import { setToken as setTokenAction } from '../redux/repos/login'
import { Center, Button, Icon } from "native-base";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import ThemeToggler from "../components/ThemeToggler";
import { FontAwesome } from '@expo/vector-icons';
import { getPlayListsAsync } from "../redux/repos/playlists";

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

      console.log(access_token);

      dispatch(setTokenAction(access_token));

      dispatch(getPlayListsAsync({ search: 'Em alta' }));

      navigate('Playlists');
    }
  }, [response]);

  return (
    <>
      <StatusBar style={'inverted'} />
      <Center
        _dark={{ bg: 'gray.900' }}
        _light={{ bg: 'gray.50' }}
        flex="1">
        <ThemeToggler />
        <Button
          colorScheme={'success'}
          onPress={() => {
            promptAsync();
          }}
          rightIcon={<Icon as={FontAwesome} name="spotify" size="lg" />}
        >
          Fazer login com Spotify
        </Button>
      </Center>
    </>
  );
}

export default Login;
