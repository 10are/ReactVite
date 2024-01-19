const TableComponent = ({ filteredPeople }: { filteredPeople: Array<{ name: string, gender: string, eyeColor: string }> }) => {
  return (
    <div className="mb-4 overflow-x-auto">
      <table className="min-w-full border border-gray-800">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Gender</th>
            <th className="py-2 px-4 text-left">Eye Color</th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map((person: { name: string, gender: string, eyeColor: string }, index: number) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
              <td className="py-2 px-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                {person.name}
              </td>
              <td className="py-2 px-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                {person.gender}
              </td>
              <td className="py-2 px-4">{person.eyeColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
