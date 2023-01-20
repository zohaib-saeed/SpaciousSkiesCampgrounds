import React from 'react';
import { Transition } from '@mantine/core';

import MenuDropdownLg from './MenuDropdownLg';
import MenuDropdownSm from './MenuDropdownSm';

interface Props {
  menuOpened: boolean;
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ menuOpened, setMenuOpened }: Props) => {
  return (
    // Main Menu Dropwdown => Has Individual Components for both desktop and small screens
    <Transition mounted={menuOpened} transition="slide-down" duration={1000} timingFunction="ease">
      {(styles) => (
        <div style={styles}>
          <MenuDropdownLg menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
          <MenuDropdownSm menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
        </div>
      )}
    </Transition>
  );
};

export default Menu;
