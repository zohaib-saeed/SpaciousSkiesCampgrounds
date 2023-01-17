import React from 'react';
import { Transition } from '@mantine/core';

import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

interface Props {
  menuOpened: boolean;
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ menuOpened, setMenuOpened }: Props) => {
  return (
    <Transition mounted={menuOpened} transition="slide-down" duration={1000} timingFunction="ease">
      {(styles) => (
        <div style={styles}>
          <MenuDesktop menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
          <MenuMobile menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
        </div>
      )}
    </Transition>
  );
};

export default Menu;
