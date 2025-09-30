import { headers } from '../../../../consts';

export default function TableHeader() {
  return (
    <div className='hidden md:flex justify-between items-center h-12 rounded-t-lg bg-gray-200 '>
      {headers.map((h) => (
        <div
          key={h.label}
          className={`${h.flex} ${h.responsive} p-2 text-center`}
        >
          {h.label}
        </div>
      ))}
    </div>
  );
}
