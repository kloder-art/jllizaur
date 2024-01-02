import * as React from 'react';
import {
  MdMusicNote,
  MdMusicOff,
  MdFullscreen,
  MdFullscreenExit,
} from 'react-icons/md';
import { TbCardboards, TbCardboardsOff } from 'react-icons/tb';
import { IconContext } from 'react-icons';

import { StyledHUD } from './StyledHUD';
import { IconButton } from '../IconButton';

type Props = {
  onCardboardClick: () => void;
  cardboard: boolean;
  onMusicClick: () => void;
  music: boolean;
  onFullscreenClick: () => void;
  fullscreen: boolean;
};

export const HUD: React.FC<Props> = ({
  onCardboardClick,
  cardboard,
  onMusicClick,
  music,
  onFullscreenClick,
  fullscreen,
}) => {
  return (
    <IconContext.Provider value={{ size: '1.5rem' }}>
      <StyledHUD>
        <IconButton
          onClick={() => {
            onMusicClick();
          }}
        >
          {music ? <MdMusicOff /> : <MdMusicNote />}
        </IconButton>
        <IconButton
          onClick={() => {
            onCardboardClick();
          }}
        >
          {cardboard ? <TbCardboardsOff /> : <TbCardboards />}
        </IconButton>
        <IconButton
          onClick={() => {
            onFullscreenClick();
          }}
        >
          {fullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
        </IconButton>
      </StyledHUD>
    </IconContext.Provider>
  );
};
