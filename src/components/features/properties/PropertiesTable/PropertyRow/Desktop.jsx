import { columns } from '../../../../../consts';
import ImgWithFallback from '../../../../ui/ImgWithFallback';

export default function PropertyRowDesktop({ property, handleOpenInfoClick }) {
  return (
    <div className='hidden md:flex justify-between items-center h-20 border-t-2 border-black '>
      {columns.map((col) => {
        const value = property[col.key];
        let content;
        if (col.key === 'images') {
          content = (
            <div className='h-16 px-4'>
              <ImgWithFallback src={property.images[0]} alt={property.type} />
            </div>
          );
        } else if (col.key === 'reference') {
          content = (
            <button
              onClick={handleOpenInfoClick}
              className='flex-1 text-center p-2 rounded-lg hover:bg-gray-300'
            >
              {value}
            </button>
          );
        } else if (col.key === 'price') {
          content = value.toLocaleString('es-ES') + '€';
        } else if (col.key === 'surface') {
          content = value.toLocaleString('es-ES') + 'm²';
        } else {
          content = value;
        }

        return (
          <div
            key={col.key}
            className={`${col.flex} ${col.responsive} text-center`}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
