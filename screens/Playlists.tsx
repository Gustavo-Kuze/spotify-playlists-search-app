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

const Playlists: FC = () => {
  const { isLoading, items } = useSelector((state: { playlists: PlaylistsReducer }) => state.playlists);
  const dispatch = useDispatch();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
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
              renderItem={({ item }) => <Playlist playlist={item} />}
              keyExtractor={item => item.id} />
          )
        }
      </Box>
    </Center>
  );
}

export default Playlists;
