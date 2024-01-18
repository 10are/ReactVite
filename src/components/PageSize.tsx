const PageSize = ({ pageSize, onPageSizeChange }: { pageSize: number, onPageSizeChange: (newSize: number) => void }) => {
  const handlePageSizeChange = (e: { target: { value: string; }; }) => {
    const newSize = parseInt(e.target.value, 10);
    onPageSizeChange(newSize);
  };

  return (
    <div className="flex items-center pt-5">
      <label className="text-white mr-2">Page Size:</label>
      <select
        value={pageSize}
        onChange={handlePageSizeChange}
        className="bg-black border ml-2 border-gray-600 hover:border-color-white p-2 rounded-md text-white w-20">
        {[10, 20, 30, 40, 50].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageSize;
