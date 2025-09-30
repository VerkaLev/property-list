import { PhotoIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function ImgWithFallback({ src, alt }) {
  const [status, setStatus] = useState('loading');

  if (!src || status === 'error') {
    return (
      <div className='flex justify-center h-full items-center bg-gray-200 rounded-xl'>
        <PhotoIcon className='w-16 h-10 text-gray-400' />
      </div>
    );
  }

  return (
    <div className='relative h-16 w-full rounded-xl bg-gray-200'>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
          status === 'loading' ? 'opacity-0' : 'opacity-100'
        }`}
        onError={() => setStatus('error')}
        onLoad={() => setStatus('loaded')}
      />
    </div>
  );
}
