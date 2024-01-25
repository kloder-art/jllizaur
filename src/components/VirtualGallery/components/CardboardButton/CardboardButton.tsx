import * as React from 'react';
import { TbCardboards, TbCardboardsOff } from 'react-icons/tb';

import { IconButton } from '../IconButton';
import { GalleryOptionsContext } from '../../context';

export const CardboardButton: React.FC = () => {
  const { cardboard, setCardboard } = React.useContext(GalleryOptionsContext);

  const toggle = React.useCallback(() => {
    setCardboard((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const onDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'KeyC') {
        toggle();
      }
    };
    document.addEventListener('keydown', onDocumentKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onDocumentKeyDown, false);
    };
  }, []);

  return (
    <IconButton
      onClick={() => {
        toggle();
      }}
    >
      {cardboard ? <TbCardboardsOff /> : <TbCardboards />}
    </IconButton>
  );
};
