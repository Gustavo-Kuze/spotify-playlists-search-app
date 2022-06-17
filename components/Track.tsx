import React, { FC } from 'react';
import {
  Text,
  Image,
  HStack,
  VStack,
  Pressable,
} from "native-base";
import { SpotifyTrack } from '../types';

interface Props {
  track: SpotifyTrack;
  onPress: (item: SpotifyTrack) => void;
}

const Track: FC<Props> = ({
  track,
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
        onPress(track);
      }}
    >
      <HStack space={3}>
        <Image
          size="md"
          source={{
            uri: (track.album.images[0] || {}).url
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
            {track.name}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200"
            }}>
            Artista: {track.artists[0].name}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default Track;
