import SidebarItem from './SidebarItem';

export default function SidebarSection({ items, isOpen }) {
  return (
    <div className='flex flex-col'>
      {items.map((item) => (
        <SidebarItem key={item.label} item={item} isOpen={isOpen} />
      ))}
    </div>
  );
}
