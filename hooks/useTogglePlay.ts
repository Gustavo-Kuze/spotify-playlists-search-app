import { Audio } from "expo-av";
import { useState } from "react";
import { SpotifyTrack } from "../types";

const useTogglePlay = (expoSoundInstance: Audio.Sound) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState<SpotifyTrack | undefined>();

  const play = async (uri: string) => {
    await expoSoundInstance.loadAsync({
      uri,
    });
    await expoSoundInstance.playAsync();
  }

  const pause = async () => {
    await expoSoundInstance.pauseAsync();
    await expoSoundInstance.unloadAsync();
  }

  const togglePlay = async (track: SpotifyTrack) => {
    if (isPlaying && currentPlayingTrack?.id === track.id) {
      await pause();
      setIsPlaying(false);
      setCurrentPlayingTrack(undefined);
    } else {
      try {
        if (currentPlayingTrack && track.id !== currentPlayingTrack.id) {
          await pause();
        }
        await play(track.preview_url);
      } catch (e) {
        console.log(`Error while trying to play the sound: `, e);
      }
      setIsPlaying(true);
      setCurrentPlayingTrack(track);
    }
  }

  return {
    isPlaying,
    currentPlayingTrack,
    togglePlay,
  };
}

export default useTogglePlay;
