import React, { useState } from 'react';
import Container from '../../Commons/Container/Container';
import FilterSmall from '../../Popups/Homepage/FilterSmall';
import DatePicker from './DatePicker';
import Guests from './Guests';
import Location from './Location';

const Filters: React.FC = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const filterToggleHandler: () => void = () => {
    setOpenFilterModal(true);
  };
  return (
    <>
      {/* For desktop  */}
      <div className="w-full hidden mdl:flex items-center justify-center border-solid border-0 border-b border-iron">
        <Container>
          <div className="grid grid-cols-3 w-full py-[10px] ">
            <Location />
            <DatePicker />
            <Guests />
          </div>
        </Container>
      </div>

      {/* For Mobile  */}
      <div className="w-full">
        <Container>
          <div
            onClick={filterToggleHandler}
            className="py-3 w-full flex mdl:hidden items-center justify-between border-solid border-0 border-b border-iron"
          >
            {/* => Date + Persons  */}
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="text-black text-base font-visby font-medium capitalize">
                Any Dates
              </div>
              <div className="text-black text-base font-visby font-medium capitalize">1 Adult</div>
            </div>
            <div className="text-black text-base font-visby font-medium capitalize">Edit</div>
          </div>
        </Container>
      </div>

      {/* Mobile Filter Modal  */}
      <FilterSmall opened={openFilterModal} setOpened={setOpenFilterModal} />
    </>
  );
};

export default Filters;
