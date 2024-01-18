const FilterComponents = ({ filterFields, filters, onFilterChange }: { filterFields: string[], filters: any, onFilterChange: (name: string, value: string) => void }) => {
    const handleFilterChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        onFilterChange(name, value);
    };

    return (
        <div className="flex flex-col mb-4 sm:flex-row sm:justify-center pt-10">
            <div className="flex items-center mb-4 mr-4 gap-4">
                {filterFields.map((field) => (
                    <label className="mr-2" key={field}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}:
                        <input
                            type="text"
                            name={field}
                            value={filters[field]}
                            onChange={handleFilterChange}
                            className="bg-black border ml-2 border-gray-600 hover:border-color-white p-2 rounded-md text-white w-full sm:w-24"
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterComponents;
