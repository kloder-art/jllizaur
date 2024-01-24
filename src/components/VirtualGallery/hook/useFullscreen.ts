import * as React from 'react';

type Props = {
  startAsFullscreen?: boolean;
};

export const useFullscreen = ({ startAsFullscreen = false }: Props = {}) => {
  const [fullscreen, setFullscreen] = React.useState(startAsFullscreen);

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

  return { fullscreen, toggle };
};
