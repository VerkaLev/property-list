import Mobile from './Mobile';
import Desktop from './Desktop';
import { useContext } from 'react';
import { RefContext } from '../../../../../context/RefContext';

export default function PropertyRow({ property }) {
  const { setRef } = useContext(RefContext);

  const handleOpenInfoClick = () => setRef(property.reference);

  return (
    <>
      <Mobile property={property} handleOpenInfoClick={handleOpenInfoClick} />
      <Desktop property={property} handleOpenInfoClick={handleOpenInfoClick} />
    </>
  );
}
