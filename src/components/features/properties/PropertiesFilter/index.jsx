import { useState } from 'react';
import FilterForm from './FilterForm';

export default function PropertiesFilter({ setFilters }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenFilterClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className='relative'>
      <button
        className='flex justify-center max-w-[18rem] w-full items-center h-8 p-2 mx-auto mb-4 rounded-lg text-white bg-black'
        onClick={handleOpenFilterClick}
      >
        Filter
      </button>
      {isOpen && <FilterForm setFilters={setFilters} setIsOpen={setIsOpen} />}
    </div>
  );
}
