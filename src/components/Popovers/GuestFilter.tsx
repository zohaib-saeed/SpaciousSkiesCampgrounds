import React from 'react';
import { FiPlus as PlusIcon } from 'react-icons/fi';
import { HiOutlineMinus as MinusIcon } from 'react-icons/hi';
import { ActionIcon } from '@mantine/core';

const GuestFilter = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start px-2 py-3 gap-3">
      {/* => Adults  */}
      <div className="w-full flex justify-between items-center gap-6 ">
        {/* => Adults label + Count */}
        <div className="flex flex-col items-start justify-center gap-1 ">
          <h3 className="text-base font-semibold font-visby text-left ">Adults</h3>
          <p className="text-sm font-normal font-visby text-left capitalize text-coolBlack  ">
            18 and Over
          </p>
        </div>
        {/* => Incerment and Decrement Buttons  */}
        <div className="flex justify-end items-center gap-5">
          {/* Decrement  */}
          <ActionIcon disabled radius="xl" variant="filled">
            <MinusIcon color="black" size={15} />
          </ActionIcon>
          {/* Count  */}
          <p className="text-base font-semibold font-visby text-left text-coolBlack  ">1</p>
          {/* Increment  */}
          <ActionIcon radius="xl" variant="outline">
            <PlusIcon color="black" size={16} />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
};

export default GuestFilter;
