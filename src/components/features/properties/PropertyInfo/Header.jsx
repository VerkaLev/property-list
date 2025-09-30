export default function PropertyHeader({ property }) {
  return (
    <div className='mb-2'>
      <h2 className='text-[2.5rem] leading-[3rem] font-bold'>
        {property.price.toLocaleString('es-ES')} {property.currency}
      </h2>
      <p className='text-gray-400'>{property.address}</p>
    </div>
  );
}
