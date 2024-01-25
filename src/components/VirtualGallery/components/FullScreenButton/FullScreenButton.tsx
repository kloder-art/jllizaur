import * as React from 'react';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

import { IconButton } from '../IconButton';
import { GalleryOptionsContext } from '../../context';

type Props = {
  startAsFullscreen?: boolean;
};

export const FullScreenButton: React.FC<Props> = () => {
  const { fullscreen, setFullscreen } = React.useContext(GalleryOptionsContext);

  const toggle = React.useCallback(() => {
    setFullscreen((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const onDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'KeyF') {
        toggle();
      }
    };
    document.addEventListener('keydown', onDocumentKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onDocumentKeyDown, false);
    };
  }, []);

  React.useEffect(() => {
    if (document) {
      if (fullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.fullscreenElement !== null) {
        document.exitFullscreen();
      }
    }
  }, [fullscreen]);

  return (
    <IconButton
      onClick={() => {
        toggle();
      }}
    >
      {fullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
    </IconButton>
  );
};
