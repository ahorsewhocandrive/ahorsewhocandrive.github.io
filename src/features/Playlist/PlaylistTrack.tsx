import * as React from 'react';
import { PlaylistTrack as PlaylistTrackType } from '../../hooks/usePlaylist';
import useAudio from '../../hooks/useAudio';
import { Audio } from '../../components';

type PlaylistTrackProps = PlaylistTrackType & {
  isCurrentIndex: boolean;
  onEnded: (i: number) => void;
};

const PlaylistTrack = ({
  isCurrentIndex,
  onEnded,
  ...track
}: PlaylistTrackProps) => {
  const { element, state, controls } = useAudio({
    src: `${track.streamUrl}?client_id=9f32c400308da184e94e83dbbf3391c7`,
  });

  React.useEffect(() => {
    controls.setEndedCallback(() => {
      onEnded(track.playlistIndex);
    });
  }, []);

  // React.useEffect(() => {
  //   if (!isCurrentIndex && !state.paused) {
  //     controls.pause();
  //   }
  // }, [isCurrentIndex, state.paused]);

  const handlePlay = () => {
    controls.play();
  };

  const handlePause = () => {
    controls.pause();
  };

  // const handleTogglePlay = () =>
  //   state.paused ? controls.play() : controls.pause();

  return (
    <>
      {element}
      <Audio
        artworkUrl={track.artworkUrl}
        duration={state.duration}
        genre={track.genre}
        isPlaying={state.paused === false}
        title={track.title}
        permalinkUrl={track.permalinkUrl}
        onPause={handlePause}
        onPlay={handlePlay}
        onSeek={controls.seek}
        // onTogglePlay={handleTogglePlay}
        time={state.time}
      />
    </>
  );
};

export default PlaylistTrack;
