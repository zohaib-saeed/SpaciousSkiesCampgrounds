import React from 'react';
import { GoSearch as SearchIcon } from 'react-icons/go';

const Guests: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center gap-2 pl-2">
      {/* => Guest Details  */}
      <div className="flex flex-col items-start justify-center gap-2 ">
        <p className="text-black text-base font-visby font-semibold">Guests</p>
        <p className="text-black text-base font-visby font-semibold">1 Adult</p>
      </div>
      {/* =>Search Icon  */}
      <div className="bg-saphhire px-5 py-5 rounded-lg flex items-center justify-center">
        <SearchIcon color="white" size={20} />
      </div>
    </div>
  );
};

export default Guests;
