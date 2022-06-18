import { FC, useState } from "react";
import {
  Box,
  Heading,
  FlatList,
  HStack,
  Spinner,
  Center,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { getPlayListsAsync, PlaylistsReducer } from "../redux/repos/playlists";
import Playlist from "../components/Playlist";
import SearchModal from "../components/SearchModal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SpotifyPlaylist } from "../types";
import { StatusBar } from 'expo-status-bar';
import EmptyComponent from "../components/EmptyComponent";

type RootStackParamList = {
  Login: undefined;
  Playlists: undefined;
  Tracks: {
    id: string;
    name: string;
  };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Playlists'>;

const Playlists: FC<Props> = ({
  navigation: { navigate },
}) => {
  const { isLoading, items } = useSelector((state: { playlists: PlaylistsReducer }) => state.playlists);
  const dispatch = useDispatch();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
            <HStack justifyContent={'space-between'}>
              <Heading fontSize="xl" p="4" pb="3">
                Playlists
              </Heading>

              <SearchModal
                isOpen={isFiltersOpen}
                setIsOpen={setIsFiltersOpen}
                onSearch={(search, filter) => {
                  dispatch(getPlayListsAsync({ search, filter }));
                  setIsFiltersOpen(false);
                }}
              />
            </HStack>
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
                ListEmptyComponent={() => <EmptyComponent>Nenhuma playlist encontrada</EmptyComponent>}
                renderItem={({ item }) => (
                  <Playlist
                    playlist={item}
                    onPress={(playlist: SpotifyPlaylist) => navigate('Tracks', playlist)}
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

export default Playlists;
