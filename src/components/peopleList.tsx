import React from 'react';
import useGraphQL from '../hooks/useGraphQL';

interface Person {
  name: string;
  gender: string;
  eyeColor: string;
}

const PeopleList = () => {
  const { loading, error, data } = useGraphQL();
  if (loading) return (
    <div className="text-center mt-4">
      <p className="animate-spin text-4xl">&#9698;</p>
      <p>Loading...</p>
    </div>
  );
  if (error) return <p>Error: {error.message}</p>;
  const people: Person[] = data.allPeople.people;

  return (
    <div className="max-w-screen-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">People</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Eye Color</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person: Person, index: number) => (
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