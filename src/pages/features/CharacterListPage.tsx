import ExportButton from '../../components/ExportButton.tsx';
import PageSize from '../../components/PageSize.tsx';
import FilterComponents from '../../components/FilterComponents.tsx';
import PaginationComponents from '../../components/PaginationComponents.tsx';
import TableComponent from '../../components/TableComponent.tsx'; 
import useCharacterList from '../../hooks/useCharacterList.tsx';

const filterFields = ['name', 'gender', 'eyeColor'];

const CharacterList = () => {
  const {
    pageSize,
    setPageSize,
    filters,
    loading,
    error,
    data,
    filteredPeople,
    handleNextPage,
    handlePrevPage,
    handleFilterChange,
  } = useCharacterList();

  if (loading) return <div className="text-center mt-4"> {}</div>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-screen-md mx-auto mt-8 text-white p-4 rounded">
      <h1 className="text-2xl font-bold mb-4 text-yellow-300 text-center">MAY THE FORCE BE WITH YOU</h1>
      <FilterComponents filterFields={filterFields} filters={filters} onFilterChange={handleFilterChange} />
      <TableComponent filteredPeople={filteredPeople} />
      <PaginationComponents handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} hasNextPage={data?.allPeople.pageInfo.hasNextPage} />
      <PageSize pageSize={pageSize} onPageSizeChange={setPageSize} />
      <ExportButton />
    </div>
  );
};

export default CharacterList;

