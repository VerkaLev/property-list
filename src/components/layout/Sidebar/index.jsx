import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { footerItems, menuItems } from '../../../consts';
import SidebarSection from './SidebarSection';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenClick = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`fixed top-0 left-0 h-full flex flex-col justify-between items-center ${
        isOpen
          ? 'w-[250px] bg-gray-100'
          : 'w-[50px] sm:w-[66px] xl:bg-white bg-gray-100'
      } py-8 z-10`}
    >
      <button
        onClick={handleOpenClick}
        className='absolute left-full top-2 -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 '
      >
        {isOpen ? (
          <ArrowLongLeftIcon className='w-3 h-3' />
        ) : (
          <ArrowLongRightIcon className='w-3 h-3' />
        )}
      </button>

      <nav>
        <SidebarSection items={menuItems} isOpen={isOpen} />
      </nav>

      <footer>
        <SidebarSection items={footerItems} isOpen={isOpen} />
      </footer>
    </div>
  );
}
