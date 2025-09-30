import { useState } from 'react';
import propertiesData from '../../../../data/properties.json';

export default function PropertyFilterForm({ setFilters, setIsOpen }) {
  const [formFilters, setFormFilters] = useState({
    cuidad: '',
    type: '',
    priceMin: '',
    priceMax: '',
    surfaceMin: '',
    surfaceMax: '',
    sinceDate: '',
    toDate: '',
  });
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFormFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResetFiltersClick = () => {
    setFilters({
      cuidad: '',
      type: '',
      priceMin: '',
      priceMax: '',
      surfaceMin: '',
      surfaceMax: '',
      sinceDate: '',
      toDate: '',
    });
    setIsOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFilterClick = () => {
    setFilters(formFilters);
    setIsOpen(false);
  };

  function getUniqueValues(data, key) {
    const unique = [];
    data.forEach((item) => {
      if (item[key] !== undefined && !unique.includes(item[key])) {
        unique.push(item[key]);
      }
    });
    return unique;
  }
  const cities = getUniqueValues(propertiesData, 'office');
  const types = getUniqueValues(propertiesData, 'type');

  return (
    <form
      onSubmit={handleSubmit}
      className='absolute left-1/2 -translate-x-1/2 top-10 flex flex-wrap justify-center gap-2 w-full max-w-[640px] p-4 rounded-lg bg-black'
    >
      <div className='flex flex-col items-center h-full'>
        <h3 className='text-white'>Cuidad</h3>
        <select
          className='h-[21px]'
          name='cuidad'
          onChange={handleFilterChange}
          value={formFilters.cuidad}
        >
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col items-center h-full'>
        <h3 className='text-white'>Type</h3>
        <select
          className='h-[21px]'
          name='type'
          onChange={handleFilterChange}
          value={formFilters.type}
        >
          {types.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className='flex items-center gap-2'>
        <div className='flex flex-col items-center h-full'>
          <h3 className='text-white'>Precio min, €</h3>
          <input
            className='w-[10rem] h-[23px] text-center'
            type='number'
            name='priceMin'
            value={formFilters.priceMin}
            placeholder='ejemplo: 100000'
            onChange={handleFilterChange}
          />
        </div>
        <div className='flex flex-col items-center h-full'>
          <h3 className='text-white'>Precio max, €</h3>
          <input
            className='w-[10rem] text-center'
            type='number'
            name='priceMax'
            value={formFilters.priceMax}
            placeholder='ejemplo: 500000'
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <div className='flex flex-col items-center h-full'>
          <h3 className='text-white'>Superficie min, m²</h3>
          <input
            className='w-[10rem] text-center'
            type='number'
            name='surfaceMin'
            value={formFilters.surfaceMin}
            placeholder='ejemplo: 100'
            onChange={handleFilterChange}
          />
        </div>
        <div className='flex flex-col items-center h-full'>
          <h3 className='text-white'>Superficie max, m²</h3>
          <input
            className='w-[10rem] text-center'
            type='number'
            name='surfaceMax'
            value={formFilters.surfaceMax}
            placeholder='ejemplo: 120'
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <div className='flex flex-col items-center h-full'>
          <h3 className='text-white'>Min Fecha</h3>
          <input
            className='h-[21px] px-1 leading-none border-none'
            type='date'
            name='sinceDate'
            value={formFilters.sinceDate}
            placeholder='ejemplo: 05/05/2025'
            onChange={handleFilterChange}
          />
        </div>
        <div className='flex flex-col items-center h-full'>
          <h3 className='text-white'>Max Fecha</h3>
          <input
            className='h-[21px] px-1 leading-none border-none'
            type='date'
            name='toDate'
            value={formFilters.toDate}
            placeholder='ejemplo: 30/09/2025'
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className='flex gap-4 items-center h-full pt-4'>
        <button
          type='button'
          className='bg-white p-1 rounded-lg'
          onClick={handleFilterClick}
        >
          ok
        </button>
        <button
          type='button'
          onClick={handleResetFiltersClick}
          className='bg-white p-1 rounded-lg'
        >
          eliminar
        </button>
      </div>
    </form>
  );
}
