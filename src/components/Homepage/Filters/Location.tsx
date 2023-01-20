import React, { useState } from 'react';
import { Select, Box } from '@mantine/core';
import { locations } from '../../../data/static/filter';

const Location: React.FC = () => {
  // States for location
  const [location, setLocation] = useState<string | null>(null);

  //Custom Dropdown component for location search box
  const LocationDropdown: () => JSX.Element = () => (
    <div className="w-full flex justify-start items-center flex-col gap-[10px] rounded py-3 px-1  shadow-sm">
      {/* => Top title  */}
      <div className="w-full flex items-center justify-between px-4 ">
        <div className="text-xs uppercase font-visby font-semibold text-ashGray ">Locations</div>
        <div className="w-[80%] lg:w-[75%] bg-iron h-[1.5px] rounded-full"></div>
      </div>
      {/* => Locaitons based on search query */}
      <div className="w-full flex flex-col items-start justify-start gap-1">
        {locations.map((location, index) => (
          <div
            key={index}
            onClick={() => setLocation(location)}
            className="w-full text-base text-coolBlack text-left py-3 px-4 rounded capitalize cursor-pointer hover:bg-iron hover:bg-opacity-20 transition-all duration-100"
          >
            {location}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop  */}
      <div className="w-full hidden mdl:flex justify-start items-center flex-col border-solid border-0 border-r border-iron pr-2">
        <Select
          searchable
          label="Campground or City/State"
          placeholder="Where do you want to go?"
          value={location}
          dropdownComponent={() => <LocationDropdown />}
          data={locations}
          classNames={{
            root: 'w-full ',
            label: ' text-black text-base font-visby',
            input:
              'border-0 placeholder:text-sapphire text-base px-0 py-[2px] font-visby placeholder:font-visby capitalize',
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
          value={location}
          dropdownComponent={() => <LocationDropdown />}
          data={locations}
          classNames={{
            root: 'w-full ',
            label: ' text-black text-[17px] font-visby',
            input:
              'border-[1px] border-iron  capitalize text-[17px] px-3 h-[43px] mt-[2px] font-visby placeholder:font-visby rounded-md focus:border-saphhire',
            rightSection: 'hidden',
          }}
        />
      </div>
    </>
  );
};

export default Location;
