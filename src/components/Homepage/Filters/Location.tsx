import React from 'react';
import { Select } from '@mantine/core';

const Location: React.FC = () => {
  return (
    <div className="w-full flex justify-start items-center flex-col pr-2">
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
          root: 'w-full border-solid border-0 border-r border-iron',
          label: ' text-black text-sm font-visby',
          input:
            'border-0 placeholder:text-sapphire text-sm px-0 py-[2px] font-visby placeholder:font-visby',
          rightSection: 'hidden',
        }}
      />
    </div>
  );
};

export default Location;
