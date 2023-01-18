import React, { useState } from 'react';
import { GoSearch as SearchIcon } from 'react-icons/go';
import { Popover } from '@mantine/core';
import GuestFilter from '../../Popovers/GuestFilter';

const Guests: React.FC = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="w-full flex justify-between items-center gap-2 pl-2">
      {/* => Guest Details  */}
      <div className="relative w-full flex flex-col items-start justify-center gap-2 ">
        <p className="text-black text-base font-visby font-semibold">Guests</p>
        <p className="text-black text-base font-visby font-semibold w-full text-left">1 Adult</p>
        {/* <Popover
          classNames={{
            dropdown: ' flex flex-col items-center justify-start !w-[350px] !left-0',
          }}
        >
          <p className="text-black text-base font-visby font-semibold">Guests</p>
          <Popover.Target>
            <p className="text-black text-base font-visby font-semibold w-full text-left">
              1 Adult
            </p>
          </Popover.Target>
          <Popover.Dropdown>
            <GuestFilter />
          </Popover.Dropdown>
        </Popover> */}
      </div>
      {/* =>Search Icon  */}
      <div className="bg-saphhire px-5 py-5 rounded-lg flex items-center justify-center">
        <SearchIcon color="white" size={20} />
      </div>
    </div>
  );
};

export default Guests;
