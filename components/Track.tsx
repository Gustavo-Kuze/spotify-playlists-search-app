import React, { FC, useState } from 'react';
import {
  Text,
  Image,
  HStack,
  VStack,
  Pressable,
  Icon,
} from "native-base";
import { SpotifyTrack } from '../types';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  track: SpotifyTrack;
  onPress: (item: SpotifyTrack) => void;
  isPlaying?: boolean;
  onTogglePlay: (item: SpotifyTrack) => void;
}

const Track: FC<Props> = ({
  track,
  onPress,
  isPlaying,
  onTogglePlay,
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
      <HStack justifyContent="space-between" alignItems="center">
        <HStack space={3} maxW="2/3">
          <Image
            alt='album picture'
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
        {!!track.preview_url && (
          <Pressable
            onPress={() => {
              onTogglePlay(track);
            }}
          >
            <Icon
              as={Ionicons}
              name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
              size="3xl"
              color="primary.500"
              mt="2"
            />
          </Pressable>
        )}
      </HStack>
    </Pressable>
  );
};

export default Track;
