import { characteristics } from '../../../../consts';

export default function PropertyCharacteristics({ property }) {
  return (
    <div>
      <h3 className='text-[0.9rem] mb-2 text-gray-600'>Características</h3>
      <div className='flex flex-wrap gap-x-6 gap-y-2'>
        {characteristics.map((c) => (
          <p
            key={c.label}
            className='flex flex-col text-[0.75rem] text-gray-400'
          >
            {c.label}
            <span className=' text-[0.9rem] text-black font-bold'>
              {property[c.value] === 'surface'
                ? `${property[c.value].toLocaleString('es-ES')} m²`
                : property[c.value]}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
