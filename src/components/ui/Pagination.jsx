import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getPageNumbers } from '../../utils/getPageNumbers';

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className='flex items-center p-4 md:p-0'>
      <button
        disabled={currentPage === 1}
        onClick={handlePrevClick}
        className='w-8 h-8 mr-2 disabled:opacity-50'
      >
        <ChevronLeftIcon />
      </button>

      {getPageNumbers(currentPage, totalPages).map((page, i) =>
        page === '...' ? (
          <span key={i} className='px-2'>
            ...
          </span>
        ) : (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 border-none rounded-lg ${
              page === currentPage ? 'bg-black text-white' : ''
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
        className='w-8 h-8 disabled:opacity-50'
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
