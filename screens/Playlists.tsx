import { FC } from "react";
import {
  Box,
  Heading,
  FlatList,
  HStack,
  Spinner,
  Center,
  IconButton,
} from "native-base";
import { useSelector } from "react-redux";
import { PlaylistsReducer } from "../redux/repos/playlists";
import Playlist from "../components/Playlist";
import { Ionicons } from '@expo/vector-icons';

const Playlists: FC = () => {
  const { isLoading, items } = useSelector((state: { playlists: PlaylistsReducer }) => state.playlists);

  return (
    <Center
      flex="1"
      safeArea
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <Box>
        <HStack justifyContent={'space-between'}>
          <Heading fontSize="xl" p="4" pb="3">
            Playlists
          </Heading>

          <IconButton
            size={'lg'}
            variant="link"
            _icon={{
              as: Ionicons,
              name: "filter"
            }}
            onPress={() => {
              console.log('filter');
            }}
          />
        </HStack>
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
              renderItem={({ item }) => <Playlist playlist={item} />}
              keyExtractor={item => item.id} />
          )
        }
      </Box>
    </Center>
  );
}

export default Playlists;
