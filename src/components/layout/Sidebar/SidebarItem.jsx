import { NavLink, useLocation } from 'react-router-dom';

export default function SidebarItem({ item, isOpen }) {
  const location = useLocation();
  const active = location.pathname === item.link;
  return (
    <NavLink to={item.link} className='flex items-center'>
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-lg ${
          active ? 'bg-gray-300 text-black' : 'text-gray-400'
        }`}
      >
        {item.icon}
      </div>
      {isOpen && <div className='ml-5 hover:text-gray-400'>{item.label}</div>}
    </NavLink>
  );
}
