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
    <div className="max-w-screen-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">People</h1>
      <button
        onClick={() => loadMore('next')}
        disabled={!data.allPeople.pageInfo.hasNextPage}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Next
      </button> //endCursor
      <button
        onClick={() => loadMore('prev')}
        disabled={!data.allPeople.pageInfo.endCursor}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Prev
      </button>
      <div className="mb-4">
        <label className="mr-2">Name:</label>
        <input type="text" value={filter.name} onChange={(e) => setFilter({ ...filter, name: e.target.value })} />
      </div>
      <div className="mb-4">
        <label className="mr-2">Gender:</label>
        <input type="text" value={filter.gender} onChange={(e) => setFilter({ ...filter, gender: e.target.value })} />
      </div>
      <div className="mb-4">
        <label className="mr-2">Eye Color:</label>
        <input type="text" value={filter.eyeColor} onChange={(e) => setFilter({ ...filter, eyeColor: e.target.value })} />
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Eye Color</th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map((person: Person, index: number) => (
            <tr key={person.name} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="py-2 px-4 border-b">{person.name}</td>
              <td className="py-2 px-4 border-b">{person.gender}</td>
              <td className="py-2 px-4 border-b">{person.eyeColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleList;
