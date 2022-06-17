import { FC, useEffect, useState } from "react";
import {
  Box,
  Heading,
  FlatList,
  HStack,
  Spinner,
  Center,
  Icon,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import Track from "../components/Track";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from "react-native";
import { getPlaylistTracksAsync, TracksReducer } from "../redux/repos/tracks";
import { Audio } from 'expo-av';
import { SpotifyTrack } from "../types";
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
              pb="12"
              minW="full"
              renderItem={({ item }) => (
                <Track
                  track={item}
                  onPress={() => { }}
                  onTogglePlay={togglePlay}
                  isPlaying={currentPlayingTrack && currentPlayingTrack.id === item.id}
                />
              )}
              keyExtractor={item => item.id}
              ListEmptyComponent={() => (
                <Center flex="1" height={Dimensions.get('window').height / 1.3}>
                  <HStack space={2} justifyContent="center">
                    <Heading color="primary.500" fontSize="md">
                      Nenhuma música encontrada
                    </Heading>
                  </HStack>
                  <Icon as={Ionicons} name="sad-outline" size="xl" color="primary.500" mt="2" />
                </Center>
              )}
            />
          )
        }
      </Box>
    </Center>
  );
}

export default Tracks;
