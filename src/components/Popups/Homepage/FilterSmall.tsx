import React, { useState } from 'react';
import { Modal } from '@mantine/core';
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
      withCloseButton
      zIndex={9999}
    >
      <div className="w-full flex items-start justify-center">
        <div className="w-full max-w-[400px] flex flex-col items-center justify-start gap-3">
          <Location />
          {/* <DatePicker /> */}
          {/* <Guests /> */}
        </div>
      </div>
    </Modal>
  );
};

export default FilterSmall;
