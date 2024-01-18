import { useState } from 'react';
import { useCharacterListQuery, fetchNextPage, fetchPrevPage } from '../utils/utils';

const useCharacterList = () => {
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState({ name: '', gender: '', eyeColor: '' });

  const { loading, error, data, fetchMore } = useCharacterListQuery(pageSize);

  const handleNextPage = () => {
    fetchNextPage(fetchMore, data?.allPeople.pageInfo, pageSize);
  };

  const handlePrevPage = () => {
    fetchPrevPage(fetchMore, data?.allPeople.pageInfo, pageSize);
  };

  const handleFilterChange = (name: any, value: any) => {
    setFilters({ ...filters, [name]: value });
  };

  const filterFields = ['name', 'gender', 'eyeColor'];

  const filteredPeople = data?.allPeople.people.filter((person: { [x: string]: string }) =>
    filterFields.every((field) =>
      person[field].toLowerCase().includes(filters[field as keyof typeof filters].toLowerCase())
    )
  );

  return {
    pageSize,
    setPageSize,
    filters,
    setFilters,
    loading,
    error,
    data,
    filteredPeople,
    handleNextPage,
    handlePrevPage,
    handleFilterChange,
  };
};

export default useCharacterList;
