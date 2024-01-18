const PaginationComponents = ({ handlePrevPage, handleNextPage, hasNextPage }: { handlePrevPage: () => void, handleNextPage: () => void, hasNextPage: boolean }) => {
  return (
    <div className="flex justify-center space-x-4">
      <button className="bg-black border border-gray-600 hover:border-color-white hover:border-white text-white py-2 px-4 rounded" onClick={handlePrevPage}>
        Prev
      </button>
      <button className="bg-black border border-gray-600 hover:border-color-white hover:border-white text-white py-2 px-4 rounded" onClick={handleNextPage} disabled={!hasNextPage}>
        Next
      </button>
    </div>
  );
};

export default PaginationComponents;
