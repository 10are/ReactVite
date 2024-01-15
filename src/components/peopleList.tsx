import React, { useState } from 'react';
import useGraphQL from '../hooks/useGraphQL';

interface Person {
  name: string;
  gender: string;
  eyeColor: string;
}

const PeopleList = () => {
  const { loading, error, data, loadMore } = useGraphQL();

  const [filter, setFilter] = useState({
    name: '',
    gender: '',
    eyeColor: '',
  });

  if (loading) return (
    <div className="text-center mt-4">
      <p className="animate-spin text-4xl">&#9698;</p>
      <p>Loading...</p>
    </div>
  );

  if (error) return <p>Error: {error.message}</p>;

  const allPeople: Person[] = data.allPeople.people;

  const filteredPeople = allPeople.filter(person => (
    person.name.toLowerCase().includes(filter.name.toLowerCase()) &&
    person.gender.toLowerCase().includes(filter.gender.toLowerCase()) &&
    person.eyeColor.toLowerCase().includes(filter.eyeColor.toLowerCase())
  ));

  return (
    <div className="max-w-screen-md mx-auto mt-8  text-white p-4 rounded">
      <h1 className="text-2xl font-bold mb-4 text-yellow-300 text-center">MAY THE FORCE BE WITH YOU</h1>
  
      <div className="flex flex-col mb-4 sm:flex-row sm:justify-center">
        <div className="flex items-center mb-4 mr-4">
          <label className="mr-2 ">Name:</label>
          <input
            type="text"
            value={filter.name}
            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
            className="bg-black bg-gray-700 border border-gray-600 p-2 rounded-md text-white w-full sm:w-24"
          />
        </div>
  
        <div className="flex items-center mb-4 mr-4">
          <label className="mr-2 ">Gender:</label>
          <input
            type="text"
            value={filter.gender}
            onChange={(e) => setFilter({ ...filter, gender: e.target.value })}
            className="bg-black bg-gray-700 border border-gray-600 p-2 rounded-md text-white w-full sm:w-24"
          />
        </div>
  
        <div className="flex items-center mb-4">
          <label className="mr-2">Eye Color:</label>
          <input
            type="text"
            value={filter.eyeColor}
            onChange={(e) => setFilter({ ...filter, eyeColor: e.target.value })}
            className="bg-black bg-gray-700 border border-gray-600 p-2 rounded-md text-white w-full sm:w-24"
          />
        </div>
      </div>
  
      <table className="min-w-full bg-gray-700 border border-gray-600 mb-4">
        <thead>
          <tr className="bg-gray-600">
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Gender</th>
            <th className="py-2 px-4 border-b text-left">Eye Color</th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map((person: Person, index: number) => (
            <tr key={person.name} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
              <td className="py-2 px-4 border-b">{person.name}</td>
              <td className="py-2 px-4 border-b">{person.gender}</td>
              <td className="py-2 px-4 border-b">{person.eyeColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => loadMore('next')}
          disabled={!data.allPeople.pageInfo.hasNextPage}
          className="bg-black bg-gray-700 border border-gray-600 hover:border-white text-white py-2 px-4 rounded"
        >
          Next
        </button>
  
        <button
          onClick={() => loadMore('prev')}
          disabled={!data.allPeople.pageInfo.endCursor}
          className="bg-black bg-gray-700 border border-gray-600 hover:border-white text-white py-2 px-4 rounded"
        >
          Prev
        </button>
      </div>
    </div>
  );  
};

export default PeopleList;
