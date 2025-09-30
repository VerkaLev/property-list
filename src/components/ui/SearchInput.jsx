import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchInput({ searchInfo, setSearchInfo }) {
  const handleSearchChange = (e) => setSearchInfo(e.target.value);
  return (
    <div className='flex flex-1 items-center w-full max-w-[36rem] h-8 px-2 mx-auto my-4 border-2 border-gray-300 rounded-lg'>
      <MagnifyingGlassIcon className='w-5 h-5 mr-2' />
      <input
        type='text'
        placeholder='Buscar'
        className='w-full focus:outline-none'
        value={searchInfo}
        onChange={handleSearchChange}
      />
    </div>
  );
}
