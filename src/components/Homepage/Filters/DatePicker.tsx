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
    <>
      {/* Desktop Screen  */}
      <div className="w-full hidden lg:flex justify-start items-center flex-col border-solid border-0 border-r border-iron px-2">
        <DateRangePicker
          amountOfMonths={2}
          clearable
          label={<DatePickerLabel />}
          placeholder="Check in - Check out &nbsp;"
          onChange={setValue}
          classNames={{
            root: 'w-full  font-visby px-2',
            label: 'w-full ',
            input:
              'border-0 placeholder:text-sapphire text-base px-0 py-[2px] font-visby placeholder:font-visby',
            calendarHeaderLevel: 'uppercase text-pineGreen font-visby font-bold',
          }}
        />
      </div>

      {/* Mobile Screen  */}
      <div className="w-full lg:hidden flex justify-start items-center flex-col ">
        <DateRangePicker
          amountOfMonths={1}
          clearable
          label={<DatePickerLabel />}
          placeholder="Check in - Check out &nbsp;"
          onChange={setValue}
          classNames={{
            root: 'w-full  font-visby',
            label: 'w-full ',
            input:
              'border-[1px] border-iron placeholder:text-sapphire text-base text-[17px] px-3 h-[47px] mt-[2px]  font-visby placeholder:font-visby rounded-md focus:border-sapphire',
            calendarHeaderLevel: 'uppercase text-pineGreen font-visby font-bold',
          }}
        />
      </div>
    </>
  );
};

export default DatePicker;
