import React from 'react';
import { Drawer } from '@mantine/core';
import { FaFacebookF as FbIcon } from 'react-icons/fa';
import { AiOutlineInstagram as InstaIcon } from 'react-icons/ai';
import Link from 'next/link';

interface Props {
  menuOpened: boolean;
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile: React.FC<Props> = ({ menuOpened, setMenuOpened }: Props) => {
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
      opened={menuOpened}
      withCloseButton={false}
      onClose={() => setMenuOpened(false)}
      size="full"
      position="top"
      classNames={{
        root: 'flex justify-center items-start lg:hidden ',
        body: 'h-full',
      }}
    >
      <div className="w-full drawer-bg  h-full flex items-end justify-center pb-2">
        <div className="w-full  flex flex-col items-center justify-center gap-6 ">
          {/* Explore + Stay */}
          <div className=" w-full flex justify-center items-center gap-4 bg-black bg-opacity-20 py-[10px] ">
            {/* Explore  */}
            <Link href="/">
              <a target="_blank" className="relative nav-item">
                <div className="  font-campfire uppercase  font-bold text-[15px] text-white  transition-all duration-500 ease-in-out ">
                  Explore
                </div>
                <div className="absolute bottom-0 w-0 h-[1.5px] bg-white left-0  transition-all duration-300"></div>
              </a>
            </Link>
            {/* Stay  */}
            <Link href="/">
              <a target="_blank" className="relative nav-item">
                <div className="relative font-campfire uppercase font-bold text-[15px]  text-white transition-all duration-300 ">
                  Stay
                </div>
                <div className="absolute bottom-0 w-0 h-[1.5px] bg-white left-0  transition-all duration-300"></div>
              </a>
            </Link>
          </div>
          {/* Menu Options */}
          <div className="w-full flex flex-col items-center justify-end  ">
            {menuOptions.map((option, index) => (
              <Link href="/">
                <div
                  key={index}
                  className="text-white leading-none opacity-70 hover:opacity-100 hover:text-saphhire text-2xl font-bold font-visby uppercase text-center bg-none border-none transition-all duration-100 cursor-pointer"
                >
                  {option}
                </div>
              </Link>
            ))}
          </div>
          {/* Divider */}
          <div className="w-[95px] bg-white h-[1.5px] rounded-full"></div>
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {/* FacebookIcon */}
            <Link href="https://facebook.com">
              <a
                target="_blank"
                className="cursor-pointer hover:opacity-70 transition-all duration-300"
              >
                <FbIcon color="white" size={18} />
              </a>
            </Link>
            {/* InstagramIcon */}
            <Link href="https://instagram.com">
              <a
                target="_blank"
                className="cursor-pointer hover:opacity-70 transition-all duration-300"
              >
                <InstaIcon color="white" size={22} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default MenuMobile;
