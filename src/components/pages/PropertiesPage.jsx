import PageHeader from '../ui/PageHeader';
import AddBtn from '../ui/AddBtn';
import SearchInput from '../ui/SearchInput';
import Pagination from '../ui/Pagination';
import PropertiesTable from '../features/properties/PropertiesTable/index';
import PropertyInfo from '../features/properties/PropertyInfo/index';
import { useProperties } from '../../hooks/useProperties';
import PropertiesFilter from '../features/properties/PropertiesFilter/index';

export default function PropertiesPage() {
  const {
    searchInfo,
    setSearchInfo,
    currentData,
    currentPage,
    setCurrentPage,
    totalPages,
    setFilters,
  } = useProperties();

  return (
    <div className='relative flex flex-col flex-1 h-full justify-between items-center xl:p-4 p-2 ml-[50px] sm:ml-[66px] xl:rounded-xl bg-white '>
      <div className='flex flex-col w-full'>
        <PageHeader
          title='Propiedades'
          action={<AddBtn text='Add nueva propiedad' />}
        />
        <SearchInput searchInfo={searchInfo} setSearchInfo={setSearchInfo} />
        <PropertiesFilter setFilters={setFilters} />
        <PropertiesTable data={currentData} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <PropertyInfo />
    </div>
  );
}
