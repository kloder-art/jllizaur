import * as React from 'react';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';
import { Howl } from 'howler';

import { IconButton } from '../IconButton';
import { GalleryOptionsContext } from '../../context';

type Props = {
  src: string;
};

export const MusicButton: React.FC<Props> = ({ src }) => {
  const { music, setMusic } = React.useContext(GalleryOptionsContext);

  const stream = React.useMemo(() => {
    return new Howl({ src, loop: true, volume: 0.2 });
  }, [src]);

  const toggle = React.useCallback(() => {
    setMusic(() => {
      if (stream.playing()) {
        stream.pause();
        return false;
      }
      stream.play();
      return true;
    });
  }, []);

  React.useEffect(() => {
    stream.play();
    const onDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'KeyM') {
        toggle();
      }
    };
    document.addEventListener('keydown', onDocumentKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onDocumentKeyDown, false);
      stream.pause();
    };
  }, []);

  return (
    <IconButton
      onClick={() => {
        toggle();
      }}
    >
      {music ? <MdMusicOff /> : <MdMusicNote />}
    </IconButton>
  );
};
