import ImgWithFallback from '../../../../ui/ImgWithFallback';

export default function PropertyRowMobile({ property, handleOpenInfoClick }) {
  return (
    <div
      onClick={handleOpenInfoClick}
      className='md:hidden flex justify-between items-center border-gray-300 border-2 p-2 rounded-lg shadow'
    >
      <div className='flex flex-col items-center mr-4'>
        <div className='h-16 px-4 mb-2'>
          <ImgWithFallback src={property.images[0]} alt={property.type} />
        </div>
        <div>{property.reference}</div>
      </div>

      <div className='flex flex-col w-full'>
        <h2 className='text-[1.2rem] font-bold'>{property.title}</h2>
        <p>{property.address}</p>
        <div className='flex gap-2'>
          <p>{property.surface.toLocaleString('es-ES') + 'm²'} </p>
          <span> | </span>
          <p>{property.price.toLocaleString('es-ES') + '€'}</p>
        </div>
      </div>
    </div>
  );
}
