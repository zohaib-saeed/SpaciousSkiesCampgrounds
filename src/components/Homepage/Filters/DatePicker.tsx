import React, { useState } from 'react';
import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';

const DatePicker: React.FC = () => {
  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  const DatePickerLabel = () => (
    <div className="w-full flex justify-between items-center gap-3">
      <p className="text-black text-base font-visby">Reservation Dates</p>
      <p className="text-black text-base font-visby">(26 Nights)</p>
    </div>
  );

  return (
    <div className="w-full flex justify-start items-center flex-col ">
      <DateRangePicker
        amountOfMonths={2}
        clearable
        label={<DatePickerLabel />}
        placeholder="Check in - Check out &nbsp;"
        onChange={setValue}
        classNames={{
          root: 'w-full border-solid border-0 border-r border-iron font-visby px-2',
          label: 'w-full ',
          input:
            'border-0 placeholder:text-sapphire text-base px-0 py-[2px] font-visby placeholder:font-visby',
          calendarHeaderLevel: 'uppercase text-pineGreen font-visby font-bold',
        }}
      />
    </div>
  );
};

export default DatePicker;
