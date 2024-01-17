// utils.tsx
import { useQuery } from '@apollo/client';
import { ALL_PEOPLE_QUERY } from '../graphql/GraphqlQueries';


export const useCharacterListQuery = (pageSize) => {
    return useQuery(ALL_PEOPLE_QUERY, {
      variables: {
        first: pageSize,
      },
    });
  };
  
  export const fetchNextPage = (fetchMore, pageInfo, pageSize, setCurrentPage) => {
    fetchMore({
      variables: {
        first: pageSize,
        after: pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          allPeople: {
            ...fetchMoreResult.allPeople,
            people: [...fetchMoreResult.allPeople.people],
          },
        };
      },
    });
    setCurrentPage((prev) => prev + 1);
  };
  
  export const fetchPrevPage = (fetchMore, pageInfo, pageSize, currentPage, setCurrentPage) => {
    if (currentPage > 1) {
      fetchMore({
        variables: {
          last: pageSize,
          before: pageInfo.startCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            allPeople: {
              ...fetchMoreResult.allPeople,
              people: [...fetchMoreResult.allPeople.people],
            },
          };
        },
      });
      setCurrentPage((prev) => prev - 1);
    }
  };
  
  
