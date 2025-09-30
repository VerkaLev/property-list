import { useEffect, useState } from 'react';
import propertiesData from '../data/properties.json';

export const useProperties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInfo, setSearchInfo] = useState('');
  const [pageCount, setPageCount] = useState(6);
  const [filters, setFilters] = useState({
    cuidad: '',
    type: '',
    priceMin: '',
    priceMax: '',
    surfaceMin: '',
    surfaceMax: '',
    sinceDate: '',
    toDate: '',
  });

  const rowHeight = 80;

  const filteredData = propertiesData.filter((item) => {
    const search = searchInfo.toLowerCase();
    const searchedData = Object.values(item).some((value) =>
      String(value).toLowerCase().includes(search)
    );

    const searchedFilters =
      (!filters.cuidad || item.office === filters.cuidad) &&
      (!filters.type || item.type === filters.type) &&
      (!filters.priceMin || item.price >= Number(filters.priceMin)) &&
      (!filters.priceMax || item.price <= Number(filters.priceMax)) &&
      (!filters.surfaceMin || item.surface >= Number(filters.surfaceMin)) &&
      (!filters.surfaceMax || item.surface <= Number(filters.surfaceMax)) &&
      (!filters.sinceDate ||
        new Date(item.date) >= new Date(filters.sinceDate)) &&
      (!filters.toDate || new Date(item.date) <= new Date(filters.toDate));

    return searchedData && searchedFilters;
  });

  const currentData = filteredData.slice(
    (currentPage - 1) * pageCount,
    currentPage * pageCount
  );

  const totalPages = Math.ceil(filteredData.length / pageCount);

  useEffect(() => {
    const updatePageSize = () => {
      const availableHeight = window.innerHeight - 200;
      const rows = Math.floor(availableHeight / rowHeight);
      setPageCount(rows > 0 ? Math.min(rows, 20) : 1);
    };

    updatePageSize();
    window.addEventListener('resize', updatePageSize);
    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  return {
    searchInfo,
    setSearchInfo,
    currentData,
    currentPage,
    setCurrentPage,
    totalPages,
    setFilters,
  };
};
