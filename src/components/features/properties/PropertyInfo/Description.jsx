export default function PropertyDescription({ description }) {
  return (
    <div>
      <h3 className='text-[0.9rem] mb-4 text-gray-600'>Descripción</h3>
      <p className='text-[0.75rem] whitespace-pre-wrap pb-2'>{description}</p>
    </div>
  );
}
