import { useContext } from 'react';
import { RefContext } from '../../context/RefContext';

export default function BgCover() {
  const { ref } = useContext(RefContext);
  if (ref === null) return;
  return <div className='absolute w-full h-full bg-gray-500/70 z-20'></div>;
}
