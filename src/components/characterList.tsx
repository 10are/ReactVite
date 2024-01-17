// CharacterList.jsx
import  { useState } from 'react';
import { ALL_PEOPLE_QUERY } from '../graphql/GraphqlQueries.tsx';
import { useQuery } from '@apollo/client';
import { useCharacterListQuery, fetchNextPage, fetchPrevPage } from './utils.tsx';

const CharacterList = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data, fetchMore } = useCharacterListQuery(pageSize);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { allPeople } = data;

  const handleNextPage = () => {
    fetchNextPage(fetchMore, allPeople.pageInfo, pageSize, setCurrentPage);
  };

  const handlePrevPage = () => {
    fetchPrevPage(fetchMore, allPeople.pageInfo, pageSize, currentPage, setCurrentPage);
  };




  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {allPeople.people.map((person, index) => (
          <li key={index}>
            {person.name} - {person.gender} - {person.eyeColor}
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={!allPeople.pageInfo.hasNextPage}
        >
          Next
        </button>
        <span> Page {currentPage} </span>
      </div>
    </div>
  );
};

export default CharacterList;
