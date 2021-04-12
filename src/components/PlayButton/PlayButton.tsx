import * as React from 'react';
import { Button, Img } from '../index';
import './PlayButton.scss';

type PlayButtonProps = {
  className?: string;
  onTogglePlay: () => void;
  playing: boolean;
};

export const PlayButton: React.FC<PlayButtonProps> = ({
  className = '',
  onTogglePlay,
  playing,
}) => {
  return (
    <Button className={`PlayButton ${className}`.trim()} onClick={onTogglePlay}>
      <Img
        alt={playing ? 'pause' : 'play'}
        src={`soundcloud/${playing ? 'pause' : 'play'}.svg`}
      />
    </Button>
  );
};
