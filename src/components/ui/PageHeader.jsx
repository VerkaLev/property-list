export default function PageHeader({ title, action }) {
  return (
    <div className='flex justify-between items-center'>
      <h2 className='text-[1.5rem] text-gray-400'>{title}</h2>
      {action}
    </div>
  );
}
