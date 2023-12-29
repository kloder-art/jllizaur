import * as React from 'react';
import { FaChevronUp } from 'react-icons/fa';

import { StyledGo2Top } from './StyledGo2Top';

const fn = () => {
  const el = document.querySelector('.go2top') as HTMLDivElement;
  if (el.style.display === 'block') {
    if (window.scrollY < 200) {
      el.style.display = 'none';
    }
  } else {
    if (window.scrollY > 200) {
      el.style.display = 'block';
    }
  }
};

export const Go2Top: React.FC = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', fn);
    return () => {
      window.removeEventListener('scroll', fn);
    };
  }, []);
  return (
    <StyledGo2Top
      href="javascript:void(0);"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className={'go2top'}
    >
      <FaChevronUp size={'25px'} />
    </StyledGo2Top>
  );
};
