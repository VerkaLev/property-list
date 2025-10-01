import { useContext } from 'react';
import propertiesData from '../../../../data/properties.json';
import Nav from './Nav';
import Header from './Header';
import Characteristics from './Characteristics';
import Features from './Features';
import Description from './Description';
import Images from './Images';
import { RefContext } from '../../../../context/RefContext';

export default function PropertyInfo() {
  const { ref, setRef } = useContext(RefContext);
  const handleCloseClick = () => setRef(null);

  if (ref === null) return;

  const currentProperty = propertiesData.find((item) => item.reference === ref);

  if (!currentProperty) return null;
  return (
    <div className='fixed sm:absolute top-0 left-0 h-[100dvh] md:h-screen w-full sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 flex flex-col sm:w-[90%] sm:h-[80%] xl:w-[62rem] xl:h-[50rem] p-6 sm:rounded-xl bg-white z-40 overflow-y-auto shadow'>
      <Nav ref={ref} handleCloseClick={handleCloseClick} />

      <div className='flex flex-col h-full'>
        <div className='flex h-full '>
          <div className='flex-1 flex flex-col justify-between sm:pr-6'>
            <div>
              <Header property={currentProperty} />
              <Characteristics property={currentProperty} />
              <Features features={currentProperty.features} />
              <div className='sm:hidden'>
                <Description description={currentProperty.description} />
              </div>
            </div>

            <div className='h-full'>
              <Images images={currentProperty.images} />
            </div>
          </div>

          <div className='flex-1 hidden sm:block'>
            <Description description={currentProperty.description} />
          </div>
        </div>
      </div>
    </div>
  );
}
