import * as React from 'react';
import { Howl } from 'howler';

// const locution = new Howl({
//   src: '/ElevenLabs_2023-12-27T23:48:51_James_pre_s50_sb75_m1.mp3',
//   loop: false,
// });
// setTimeout(() => {
//   locution.play();
// }, 5000);

type Props = {
  src: string;
  startPlaying: boolean;
};

export const useMusic = ({ src, startPlaying = true }: Props) => {
  const [playing, setPlaying] = React.useState(startPlaying);

  const music = React.useMemo(() => {
    return new Howl({ src, loop: true, volume: 0.2 });
  }, [src]);

  const toggle = React.useCallback(() => {
    setPlaying(() => {
      if (music.playing()) {
        music.pause();
        return false;
      }
      music.play();
      return true;
    });
  }, []);

  React.useEffect(() => {
    music.play();
    const onDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'KeyM') {
        toggle();
      }
    };
    document.addEventListener('keydown', onDocumentKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onDocumentKeyDown, false);
      music.pause();
    };
  }, []);

  return { playing, toggle };
};
