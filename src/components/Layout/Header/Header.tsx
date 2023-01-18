import React, { useState } from 'react';
import { Burger } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF as FbIcon } from 'react-icons/fa';
import { AiOutlineInstagram as InstaIcon } from 'react-icons/ai';
import Menu from './Menu';
import Container from '../../Commons/Container/Container';

const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const menuTitle: string = menuOpened ? 'Close navigation' : 'Open navigation';

  const menuHandler: () => void = () => {
    setMenuOpened((o) => !o);
  };

  return (
    <>
      <header className="z-[999] w-full flex justify-center items-center absolute top-0 left-0 py-6">
        <Container>
          {/* => Navbar */}
          <nav className=" w-full  flex justify-between items-center relative">
            {/* Logo */}
            <Link href="/">
              <div className="w-[75px] mdl:w-[105px] h-[90px] mdl:h-[120px] cursor-pointer relative flex items-center justify-center object-contain">
                <Image priority src="/images/logoWhite.webp" alt="" layout="fill" />
              </div>
            </Link>

            <div className=" flex justify-end items-center gap-5">
              {/* Social Links + Explore +Stay */}
              <div className=" hidden md:flex justify-end items-center gap-5 ">
                {/* FacebookIcon */}
                <Link href="https://facebook.com">
                  <a
                    target="_blank"
                    className="cursor-pointer hover:opacity-70 transition-all duration-300"
                  >
                    <FbIcon color="white" size={18} />
                  </a>
                </Link>
                {/* Instagram Icon */}
                <Link href="https://instagram.com">
                  <a
                    target="_blank"
                    className="cursor-pointer hover:opacity-70 transition-all duration-300"
                  >
                    <InstaIcon color="white" size={18} />
                  </a>
                </Link>
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
                    <div className="relative font-campfire uppercase font-bold text-[15px] text-white transition-all duration-300 ">
                      Stay
                    </div>
                    <div className="absolute bottom-0 w-0 h-[1.5px] bg-white left-0  transition-all duration-300"></div>
                  </a>
                </Link>
              </div>
              {/* Cart + Menu Button */}
              <div className="flex justify-end items-center gap-3 md:gap-5">
                {/* Cart  */}
                <Link href="/">
                  <a target="_blank" className="relative nav-item">
                    <div className="font-campfire uppercase font-bold text-[15px] text-white cursor-pointer  transition-all duration-300">
                      My Cart
                    </div>
                    <div className="absolute bottom-0 w-0 h-[1.5px] bg-white left-0  transition-all duration-300"></div>
                  </a>
                </Link>
                {/* Menu  */}
                <Burger
                  color="black"
                  size="sm"
                  opened={menuOpened}
                  onClick={menuHandler}
                  title={menuTitle}
                  classNames={{
                    root: 'bg-darkYellow w-[45px] h-[45px] ml-2 rounded-full flex items-center justify-center',
                  }}
                />
              </div>
            </div>
          </nav>
        </Container>
      </header>
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </>
  );
};

export default Header;
