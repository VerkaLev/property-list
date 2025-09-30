import TableHeader from './TableHeader';
import PropertyRow from './PropertyRow/index';

export default function PropertiesTable({ data }) {
  return (
    <div>
      <TableHeader />
      <div className='flex flex-col gap-4 md:gap-0 pb-2 overflow-x-hidden'>
        {data.map((p) => (
          <PropertyRow key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}
