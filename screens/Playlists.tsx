import { FC, useState } from "react";
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
import { getPlayListsAsync, PlaylistsReducer } from "../redux/repos/playlists";
import Playlist from "../components/Playlist";
import SearchModal from "../components/SearchModal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SpotifyPlaylist } from "../types";
import { Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

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
                pb="12"
                minW="full"
                renderItem={({ item }) => <Playlist playlist={item} onPress={(playlist: SpotifyPlaylist) => navigate('Tracks', playlist)} />}
                keyExtractor={item => item.id}
                ListEmptyComponent={() => (
                  <Center flex="1" height={Dimensions.get('window').height / 1.3}>
                    <HStack space={2} justifyContent="center">
                      <Heading color="primary.500" fontSize="md">
                        Nenhuma playlist encontrada
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
    </>
  );
}

export default Playlists;
