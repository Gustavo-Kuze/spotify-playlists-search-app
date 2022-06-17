import React, { FC } from 'react';
import {
  Text,
  Image,
  HStack,
  VStack,
  Pressable,
} from "native-base";
import { SpotifyPlaylist } from '../types';

interface Props {
  playlist: SpotifyPlaylist;
  onPress: (item: SpotifyPlaylist) => void;
}

const Playlist: FC<Props> = ({
  playlist,
  onPress,
}) => {

  return (
    <Pressable
      borderBottomWidth="1"
      _dark={{
        borderColor: "gray.600"
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2"
      onPress={() => {
        onPress(playlist);
      }}
    >
      <HStack space={3}>
        <Image
          size="md"
          source={{
            uri: (playlist.images[0] || {}).url
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
            {playlist.name}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200"
            }}>
            Criada por {playlist.owner.display_name}
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
            Total de músicas: {playlist.tracks.total}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default Playlist;
