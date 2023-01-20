import React from 'react';
import { ActionIcon } from '@mantine/core';
import { HiOutlinePlus as Plus, HiOutlineMinus as Minus } from 'react-icons/hi';

const GuestsFilterDropdown: React.FC = () => {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-2 py-3 px-3 ">
      {/* => Adults  */}
      <div className="w-full flex justify-between items-center gap-3 pb-[6px] xs:pb-3 border-solid border-0 border-b border-iron">
        <div className="flex flex-col items-start justify-center gap-[6px] ">
          <div className="text-black text-base font-visby font-semibold">Adults</div>
          <div className="text-black text-[15px] font-visby font-notmal">18 And Over</div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <ActionIcon size="lg" radius="xl" variant="outline" disabled>
            <Minus color="black" size={15} />
          </ActionIcon>
          <div className="text-black text-base font-visby font-medium">1</div>
          <ActionIcon size="lg" radius="xl" variant="outline">
            <Plus color="black" size={15} />
          </ActionIcon>
        </div>
      </div>
      {/* => Children  */}
      <div className="w-full flex justify-between items-center gap-3 py-[6px] xs:py-3 border-solid border-0 border-b border-iron">
        <div className="flex flex-col items-start justify-center gap-[6px] ">
          <div className="text-black text-base font-visby font-semibold">Children</div>
          <div className="text-black text-[15px] font-visby font-notmal">Under 18</div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <ActionIcon size="lg" radius="xl" variant="outline" disabled>
            <Minus color="black" size={15} />
          </ActionIcon>
          <div className="text-black text-base font-visby font-medium">0</div>
          <ActionIcon size="lg" radius="xl" variant="outline">
            <Plus color="black" size={15} />
          </ActionIcon>
        </div>
      </div>
      {/* => Pets  */}
      <div className="w-full flex justify-between items-center gap-3 pt-[6px] xs:pt-3 ">
        <div className="text-black text-base font-visby font-semibold">Pets</div>
        <div className="flex items-center justify-end gap-4">
          <ActionIcon size="lg" radius="xl" variant="outline" disabled>
            <Minus color="black" size={15} />
          </ActionIcon>
          <div className="text-black text-base font-visby font-medium">0</div>
          <ActionIcon size="lg" radius="xl" variant="outline">
            <Plus color="black" size={15} />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
};

export default GuestsFilterDropdown;
