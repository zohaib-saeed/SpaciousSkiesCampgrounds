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

const FilterSmall: React.FC<Props> = ({ opened, setOpened }) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      fullScreen
      withCloseButton={false}
      zIndex={9999}
    >
      <div className="w-full flex items-center justify-start flex-col">
        {/* => Close Button  */}
        <div className="w-full flex items-center justify-end">
          <CloseIcon color="#173068" size={30} />
        </div>
        <div className="w-full max-w-[400px] flex flex-col items-center justify-start gap-3">
          <Location />
          <DatePicker />
          <Guests />
          <Button
            classNames={{
              root: 'w-full px-3 font-bold  rounded-md text-base h-[42px] bg-saphhire',
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
