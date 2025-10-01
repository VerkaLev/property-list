import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useContext, useState } from 'react';
import propertiesData from '../../../../data/properties.json';
import { RefContext } from '../../../../context/RefContext';

export default function PropertyNav({ ref, handleCloseClick }) {
  const [currentRef, setCurrentRef] = useState(ref);
  const { setRef } = useContext(RefContext);

  const currentIndex = propertiesData.findIndex(
    (item) => item.reference === currentRef
  );
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      const prevItem = propertiesData[currentIndex - 1];
      setCurrentRef(prevItem.reference);
      setRef(prevItem.reference);
    }
  };

  const handleNextClick = () => {
    const nextItem = propertiesData[currentIndex + 1];
    setCurrentRef(nextItem.reference);
    setRef(nextItem.reference);
  };

  return (
    <div className='flex justify-between items-center mb-6'>
      <div className='flex items-center'>
        <button
          disabled={currentIndex === 0}
          onClick={handlePrevClick}
          className='w-8 h-8 text-gray-400 disabled:opacity-20'
        >
          <ChevronLeftIcon />
        </button>
        <button className='text-[1.4rem] text-gray-400'>{ref}</button>
        <button
          disabled={currentIndex === propertiesData.length - 1}
          onClick={handleNextClick}
          className='w-8 h-8 text-gray-400 disabled:opacity-20'
        >
          <ChevronRightIcon />
        </button>
      </div>
      <button onClick={handleCloseClick} className='w-8 h-8 text-gray-400'>
        <XMarkIcon />
      </button>
    </div>
  );
}
