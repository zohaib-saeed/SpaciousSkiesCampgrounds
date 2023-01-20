import React from 'react';
import { GoSearch as SearchIcon } from 'react-icons/go';
import { Popover, TextInput } from '@mantine/core';
import GuestsFilterDropdown from './GuestsFilterDropdown';

const Guests: React.FC = () => {
  return (
    <>
      {/* Desktop Screen  */}
      <div className="w-full hidden lg:flex justify-between items-center gap-2 pl-3 ">
        {/* => Guest Details  */}
        <Popover
          position="bottom"
          shadow="md"
          withArrow={false}
          classNames={{
            dropdown: '!left-auto min-w-[270px] max-w-[350px] !w-[80%] ',
          }}
        >
          <Popover.Target>
            <TextInput
              value="1 Adult"
              type="button"
              label="Guests"
              classNames={{
                label: 'text-black text-base font-visby font-semibold',
                root: 'w-full',
                input:
                  'border-0 text-base text-base h-[47px]  font-visby font-normal placeholder:font-visby rounded-md focus:border-0 px-0 cursor-pointer',
              }}
            />
          </Popover.Target>
          <Popover.Dropdown>
            <GuestsFilterDropdown />
          </Popover.Dropdown>
        </Popover>

        {/* =>Search Icon  */}
        <div className="bg-saphhire px-5 py-5 rounded-lg flex items-center justify-center cursor-pointer">
          <SearchIcon color="white" size={20} />
        </div>
      </div>

      {/* Small Screen  */}
      <div className="w-full lg:hidden flex justify-center items-center gap-2 ">
        {/* => Guest Details  */}
        <Popover
          position="bottom"
          shadow="md"
          withArrow={false}
          classNames={{
            dropdown: '!left-auto min-w-[270px] max-w-[350px] !w-[80%] ',
          }}
        >
          <Popover.Target>
            <TextInput
              value="1 Adult"
              type="button"
              label="Guests"
              classNames={{
                label: 'text-black text-base font-visby font-semibold',
                root: 'w-full',
                input:
                  'border-[1px] border-iron placeholder:text-sapphire text-base text-[17px] px-3 h-[43px] mt-[2px]  font-visby placeholder:font-visby rounded-md focus:border-saphhire cursor-pointer',
              }}
            />
          </Popover.Target>
          <Popover.Dropdown>
            <GuestsFilterDropdown />
          </Popover.Dropdown>
        </Popover>
      </div>
    </>
  );
};

export default Guests;
