import React from 'react';
import { Drawer } from '@mantine/core';
import Link from 'next/link';

interface Props {
  menuOpened: boolean;
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuDesktop: React.FC<Props> = ({ menuOpened, setMenuOpened }: Props) => {
  const menuOptions: string[] = [
    'campgrounds',
    'shop',
    'about',
    'want to say',
    'press',
    'my account',
    'contact',
  ];

  return (
    <Drawer
      classNames={{
        root: 'hidden lg:flex ',
      }}
      opened={menuOpened}
      onClose={() => setMenuOpened(false)}
      withCloseButton={false}
      size="xl"
      position="top"
    >
      <div className="w-full h-screen drawer-bg py-8 flex flex-col items-center justify-end px-[16px] gap-28 ">
        {/* Menu Options */}
        <div className="w-full flex flex-col items-center justify-end  ">
          {menuOptions.map((option, index) => (
            <Link href="/">
              <div
                key={index}
                className="text-white leading-none opacity-70 hover:opacity-100 hover:text-saphhire text-[28px] lg:text-[35px] font-bold font-visby uppercase text-center bg-none border-none transition-all duration-100 cursor-pointer"
              >
                {option}
              </div>
            </Link>
          ))}
        </div>
        {/* Bottom Label */}
        <p className="text-white text-xs opacity-70 font-visby w-full text-center">
          © Spacious Skies Campgrounds
        </p>
      </div>
    </Drawer>
  );
};

export default MenuDesktop;
