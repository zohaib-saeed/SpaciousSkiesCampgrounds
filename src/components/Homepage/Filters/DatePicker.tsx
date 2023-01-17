import React, { useState } from 'react';
import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';

const DatePicker: React.FC = () => {
  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);
  return (
    <div className="w-full flex justify-start items-center flex-col px-2">
      <DateRangePicker
        amountOfMonths={2}
        clearable
        label="Reservation Dates"
        placeholder="Check in - Check out &nbsp;"
        onChange={setValue}
        classNames={{
          root: 'w-full border-solid border-0 border-r border-iron',
          label: ' text-black text-sm font-visby',
          input:
            'border-0 placeholder:text-sapphire text-sm px-0 py-[2px] font-visby placeholder:font-visby',
        }}
      />
    </div>
  );
};

export default DatePicker;
