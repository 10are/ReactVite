import React from 'react';

const TableComponent = ({ filteredPeople }: { filteredPeople: Array<{ name: string, gender: string, eyeColor: string }> }) => {
  return (
    <div className="mb-4">
      <table className="min-w-full border border-gray-800">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Gender</th>
            <th className="py-2 px-4 text-left">Eye Color</th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map((person: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; gender: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; eyeColor: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
            <tr key={index} className={Number(index) % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
              <td className="py-2 px-4">{person.name}</td>
              <td className="py-2 px-4">{person.gender}</td>
              <td className="py-2 px-4">{person.eyeColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
