export default function PropertyFeatures({ features }) {
  return (
    <div className='mb-4'>
      <h3 className='mb-2 mt-4 text-[0.9rem] text-gray-600'>Detalles</h3>
      <div className='flex flex-wrap gap-2'>
        {features?.map((item) => (
          <p
            key={item}
            className='px-2 py-1 text-[0.75rem] rounded-lg text-white text-sm bg-gray-500'
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
