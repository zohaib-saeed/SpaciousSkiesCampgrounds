import React, { useState } from 'react';
import { Modal, Button } from '@mantine/core';
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';

import Location from '../../Homepage/Filters/Location';
import DatePicker from '../../Homepage/Filters/DatePicker';
import Guests from '../../Homepage/Filters/Guests';

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

// Filter for mobile view => This will appear as a Modal whenn user clicks the filter customization option on homepage for small screens

const FilterSmall: React.FC<Props> = ({ opened, setOpened }) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      fullScreen
      withCloseButton={false}
      zIndex={9999}
      classNames={{
        root: 'lg:hidden flex',
      }}
    >
      <div className="w-full flex items-center justify-start flex-col">
        {/* => Close Button  */}
        <div className="w-full flex items-center justify-end">
          <CloseIcon
            color="#173068"
            size={30}
            onClick={() => setOpened(false)}
            className="cursor-pointer"
          />
        </div>

        {/* => Searh Inputs + Updated filter search button  */}
        <div className="w-full max-w-[470px] flex flex-col items-center justify-start gap-3">
          {/* Search inputs  */}
          <Location />
          <DatePicker />
          <Guests />
          {/* Button => Will update the search based on user inserted search values */}
          <Button
            classNames={{
              root: 'w-full px-3 font-bold  rounded-md text-base h-[42px] bg-saphhire hover:bg-saphhire',
              inner: '',
            }}
          >
            Update Search
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterSmall;
