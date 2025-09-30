import {
  HomeIcon,
  UserPlusIcon,
  UsersIcon,
  HeartIcon,
  CircleStackIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  DocumentIcon,
  MapIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

export const menuItems = [
  { label: 'Inicio', link: '/', icon: <HomeIcon className='w-5 h-5' /> },
  {
    label: 'Agregar usuario',
    link: '/agregarUsario',
    icon: <UserPlusIcon className='w-5 h-5' />,
  },
  {
    label: 'Usuarios',
    link: '/usarios',
    icon: <UsersIcon className='w-5 h-5' />,
  },
  {
    label: 'Favoritos',
    link: '/favoritos',
    icon: <HeartIcon className='w-5 h-5' />,
  },
  {
    label: 'Precio',
    link: '/precio',
    icon: <CircleStackIcon className='w-5 h-5' />,
  },
  {
    label: 'Propiedades',
    link: '/propiedades',
    icon: <BuildingOffice2Icon className='w-5 h-5' />,
  },
  {
    label: 'Calendario',
    link: '/calendario',
    icon: <CalendarIcon className='w-5 h-5' />,
  },
  {
    label: 'Documentos',
    link: '/documentos',
    icon: <DocumentIcon className='w-5 h-5' />,
  },
  { label: 'Mapa', link: '/mapa', icon: <MapIcon className='w-5 h-5' /> },
];

export const footerItems = [
  {
    label: 'Configuración',
    link: '/configuracion',
    icon: <Cog6ToothIcon className='w-5 h-5' />,
  },
  {
    label: 'Cerrar sesión',
    link: '/cerrarSesion',
    icon: <ArrowLeftStartOnRectangleIcon className='w-5 h-5' />,
  },
];

export const columns = [
  { key: 'images', flex: 'flex-1', responsive: 'block' },
  { key: 'office', flex: 'flex-1', responsive: 'hidden xl:block' },
  { key: 'reference', flex: 'flex-1', responsive: 'block' },
  { key: 'type', flex: 'flex-1', responsive: 'hidden xl:block' },
  { key: 'address', flex: 'flex-[3]', responsive: 'block' },
  { key: 'price', flex: 'flex-1', responsive: 'block' },
  { key: 'rooms', flex: 'flex-1', responsive: 'hidden xl:block' },
  { key: 'surface', flex: 'flex-1', responsive: 'hidden lg:block' },
  { key: 'date', flex: 'flex-1', responsive: 'hidden xl:block' },
];

export const headers = [
  { label: 'Foto', flex: 'flex-1', responsive: 'block' },
  { label: 'Oficina', flex: 'flex-1', responsive: 'hidden xl:block' },
  { label: 'Referencia', flex: 'flex-1', responsive: 'block' },
  { label: 'Tipo', flex: 'flex-1', responsive: 'hidden xl:block' },
  { label: 'Dirección', flex: 'flex-[3]', responsive: 'block' },
  { label: 'Precio', flex: 'flex-1', responsive: 'block' },
  { label: 'Habitaciones', flex: 'flex-1', responsive: 'hidden xl:block' },
  { label: 'Superficie', flex: 'flex-1', responsive: 'hidden lg:block' },
  { label: 'Fecha', flex: 'flex-1', responsive: 'hidden xl:block' },
];

export const characteristics = [
  { label: 'Superficie', value: 'surface' },
  { label: 'Habitaciones', value: 'rooms' },
  { label: 'Baños', value: 'bathrooms' },
  { label: 'Clase energética', value: 'energy' },
  { label: 'Emisiones CO²', value: 'co2' },
  { label: 'Construcción', value: 'construction' },
  { label: 'Conservación', value: 'conservation' },
];
