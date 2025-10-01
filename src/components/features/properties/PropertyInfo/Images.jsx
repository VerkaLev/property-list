import ImgWithFallback from '../../../ui/ImgWithFallback';

export default function PropertyImages({ images }) {
  return (
    <div className='flex flex-col justify-end h-full gap-4 pb-4 md:pb-0'>
      <div className='flex-[2] w-full h-auto sm:min-h-[9rem] min-h-[12rem] rounded-xl bg-gray-200'>
        <ImgWithFallback src={images[0]} alt='property' />
      </div>
      <div className='flex-[1] w-full h-auto sm:min-h-[4rem] min-h-[7rem] flex gap-2'>
        <div className='flex-1'>
          <ImgWithFallback src={images[1]} alt='property' />
        </div>
        <div className='flex-1'>
          <ImgWithFallback src={images[2]} alt='property' />
        </div>
      </div>
    </div>
  );
}
