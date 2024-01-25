import * as React from 'react';

type ContextProps = {
  music: boolean;
  setMusic: React.Dispatch<React.SetStateAction<boolean>>;
  cardboard: boolean;
  setCardboard: React.Dispatch<React.SetStateAction<boolean>>;
  fullscreen: boolean;
  setFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GalleryOptionsContext = React.createContext<ContextProps>({
  cardboard: true,
  setCardboard: () => {},
  music: true,
  setMusic: () => {},
  fullscreen: true,
  setFullscreen: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const GalleryOptionsContextProvider: React.FC<Props> = ({
  children,
}) => {
  const [music, setMusic] = React.useState(true);
  const [cardboard, setCardboard] = React.useState(true);
  const [fullscreen, setFullscreen] = React.useState(false);

  return (
    <GalleryOptionsContext.Provider
      value={{
        music,
        setMusic,
        cardboard,
        setCardboard,
        fullscreen,
        setFullscreen,
      }}
    >
      {children}
    </GalleryOptionsContext.Provider>
  );
};
