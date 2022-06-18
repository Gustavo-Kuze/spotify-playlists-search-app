import { FC, useEffect, useState } from "react";
import {
  Box,
  Heading,
  FlatList,
  HStack,
  Spinner,
  Center,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import Track from "../components/Track";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getPlaylistTracksAsync, TracksReducer } from "../redux/repos/tracks";
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';
import { SpotifyTrack } from "../types";
import EmptyComponent from "../components/EmptyComponent";
let sound = new Audio.Sound();

type RootStackParamList = {
  Playlists: undefined;
  Tracks: {
    id: string;
    name: string;
  };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Tracks'>;

const Tracks: FC<Props> = ({
  navigation: { navigate },
  route: { params },
}) => {

  const { isLoading, items } = useSelector((state: { tracks: TracksReducer }) => state.tracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState<SpotifyTrack | undefined>();
  const dispatch = useDispatch();

  const togglePlay = async (track: SpotifyTrack) => {
    if (isPlaying && currentPlayingTrack?.id === track.id) {
      await sound.pauseAsync();
      await sound.unloadAsync();
      setIsPlaying(false);
      setCurrentPlayingTrack(undefined);
    } else {
      try {
        if (currentPlayingTrack && track.id !== currentPlayingTrack.id) {
          await sound.pauseAsync();
          await sound.unloadAsync();
        }
        await sound.loadAsync({
          uri: track.preview_url,
        });
        await sound.playAsync();
      } catch (e) {
        console.log(`cannot play the sound file`, e);
      }
      setIsPlaying(true);
      setCurrentPlayingTrack(track);
    }
  }

  useEffect(() => {
    dispatch(getPlaylistTracksAsync({ id: params.id }));
  }, [params]);

  return (
    <>
      <StatusBar style={'inverted'} />
      <Center
        flex="1"
        safeArea
        _dark={{ bg: 'gray.900' }}
        _light={{ bg: 'gray.50' }}
      >
        <Box>
          {!isLoading && (
            <>
              <HStack justifyContent={'space-between'}>
                <Heading fontSize="lg" p="4" pb="3" textBreakStrategy="balanced">
                  Músicas da Playlist
                </Heading>

              </HStack>
              <Heading fontSize="sm" p="4" pb="3" textBreakStrategy="balanced">
                {params.name}
              </Heading>
            </>
          )}
          {
            isLoading ? (
              <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md">
                  Carregando...
                </Heading>
              </HStack>
            ) : (
              <FlatList
                data={items}
                keyExtractor={item => item.id}
                pb="12"
                minW="full"
                ListEmptyComponent={() => <EmptyComponent>Nenhuma música encontrada</EmptyComponent>}
                renderItem={({ item }) => (
                  <Track
                    track={item}
                    onPress={() => { }}
                    onTogglePlay={togglePlay}
                    isPlaying={currentPlayingTrack && currentPlayingTrack.id === item.id}
                  />
                )}
              />
            )
          }
        </Box>
      </Center>
    </>
  );
}

export default Tracks;
