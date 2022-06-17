import { FC } from "react";
import {
  Box,
  Heading,
  FlatList,
  Text,
  Image,
  HStack,
  VStack,
  Spinner,
  Center,
} from "native-base";
import { useSelector } from "react-redux";
import { PlaylistsReducer } from "../redux/repos/playlists";

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
        <Heading fontSize="xl" p="4" pb="3">
          Playlists
        </Heading>
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
              renderItem={({
                item
              }) => (
                <Box borderBottomWidth="1" _dark={{
                  borderColor: "gray.600"
                }}
                  borderColor="coolGray.200"
                  pl="4"
                  pr="5"
                  py="2"
                >
                  <HStack space={3}>
                    <Image
                      size="md"
                      source={{
                        uri: item.images[0].url
                      }} />
                    <VStack >
                      <Text
                        _dark={{
                          color: "warmGray.50"
                        }}
                        color="coolGray.800"
                        bold
                        maxW="80"
                        textBreakStrategy="balanced"
                      >
                        {item.name}
                      </Text>
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200"
                        }}>
                        Criada por {item.owner.display_name}
                      </Text>
                      <Text
                        mt="4"
                        fontSize="sm"
                        _dark={{
                          color: "warmGray.50"
                        }}
                        color="coolGray.800"
                        alignSelf="flex-start"
                      >
                        Total de músicas: {item.tracks.total}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              )}
              keyExtractor={item => item.id} />
          )
        }
      </Box>
    </Center>
  );
}

export default Playlists;
