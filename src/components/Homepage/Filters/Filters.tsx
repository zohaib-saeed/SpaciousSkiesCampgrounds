import React from 'react';
import Container from '../../Commons/Container/Container';
import DatePicker from './DatePicker';
import Location from './Location';

const Filters: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center border-solid border-0 border-b border-iron">
      <Container>
        <div className="grid grid-cols-3 w-full py-[10px] ">
          <Location />
          <DatePicker />
        </div>
      </Container>
    </div>
  );
};

export default Filters;
