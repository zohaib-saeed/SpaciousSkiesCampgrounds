import React from 'react';
import { Select } from '@mantine/core';

const Location: React.FC = () => {
  return (
    <>
      {/* Desktop  */}
      <div className="w-full hidden mdl:flex justify-start items-center flex-col border-solid border-0 border-r border-iron pr-2">
        <Select
          searchable
          label="Campground or City/State"
          placeholder="Where do you want to go?"
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ]}
          classNames={{
            root: 'w-full ',
            label: ' text-black text-base font-visby',
            input:
              'border-0 placeholder:text-sapphire text-base px-0 py-[2px] font-visby placeholder:font-visby',
            rightSection: 'hidden',
          }}
        />
      </div>
      {/* Small Screens  */}
      <div className="w-full flex mdl:hidden justify-start items-center">
        <Select
          searchable
          label="Campground or City/State"
          placeholder="Where do you want to go?"
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ]}
          classNames={{
            root: 'w-full ',
            label: ' text-black text-[17px] font-visby',
            input:
              'border-[1px] border-iron placeholder:text-sapphire text-[17px] px-3 h-[47px] mt-[2px] font-visby placeholder:font-visby rounded-md focus:border-sapphire',
            rightSection: 'hidden',
          }}
        />
      </div>
    </>
  );
};

export default Location;
