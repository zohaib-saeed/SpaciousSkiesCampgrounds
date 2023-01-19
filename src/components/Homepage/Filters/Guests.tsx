import React, { useState } from 'react';
import { GoSearch as SearchIcon } from 'react-icons/go';
import { Popover, TextInput } from '@mantine/core';
import GuestFilter from '../../Popovers/GuestFilter';

const Guests: React.FC = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      {/* Desktop Screen  */}
      <div className="w-full hidden lg:flex justify-between items-center gap-2 pl-3 ">
        {/* => Guest Details  */}
        <TextInput
          value="1 Adult"
          type="button"
          label="Guests"
          classNames={{
            label: 'text-black text-base font-visby font-semibold',
            root: 'w-full',
            input:
              'border-0 text-base text-base h-[47px]  font-visby font-semibold placeholder:font-visby rounded-md focus:border-0 px-0',
          }}
        />

        {/* =>Search Icon  */}
        <div className="bg-saphhire px-5 py-5 rounded-lg flex items-center justify-center">
          <SearchIcon color="white" size={20} />
        </div>
      </div>

      {/* Small Screen  */}
      <div className="w-full lg:hidden flex justify-between items-center gap-2 ">
        {/* => Guest Details  */}
        <TextInput
          value="1 Adult"
          type="button"
          label="Guests"
          classNames={{
            label: 'text-black text-base font-visby font-semibold',
            root: 'w-full',
            input:
              'border-[1px] border-iron placeholder:text-sapphire text-base text-[17px] px-3 h-[47px] mt-[2px]  font-visby placeholder:font-visby rounded-md focus:border-sapphire',
          }}
        />
      </div>
    </>
  );
};

export default Guests;
