import { PlusIcon } from '@heroicons/react/24/outline';

export default function AddBtn({ text }) {
  return (
    <button className='flex items-center h-8 p-2 rounded-lg text-white text-[0.75rem] bg-black'>
      <PlusIcon className='w-5 h-5' /> {text}
    </button>
  );
}
