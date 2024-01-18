import { useQuery } from '@apollo/client';
import { ALL_PEOPLE_QUERY } from '../graphql/GraphqlQueries';


export const useCharacterListQuery = (pageSize: number) => {
    return useQuery(ALL_PEOPLE_QUERY, {
      variables: {
        first: pageSize,
      },
    });
  };
  
  export const fetchNextPage = (fetchMore: any, pageInfo: { endCursor: any; }, pageSize: number) => {
    fetchMore({
      variables: {
        first: pageSize,
        after: pageInfo.endCursor,
      },
      updateQuery: (prev: any, { fetchMoreResult }: { fetchMoreResult: any }) => {
        if (!fetchMoreResult) return prev;
        return {
          allPeople: {
            ...fetchMoreResult.allPeople,
            people: [...fetchMoreResult.allPeople.people],
          },
        };
      },
    });
  };
  
  export const fetchPrevPage = (fetchMore: any, pageInfo: any , pageSize: number ) => { {
      fetchMore({
        variables: {
          last: pageSize,
          before: pageInfo.startCursor,
        },
        updateQuery: (prev: any, { fetchMoreResult }: { fetchMoreResult: any }) => {
          if (!fetchMoreResult) return prev;
          return {
            allPeople: {
              ...fetchMoreResult.allPeople,
              people: [...fetchMoreResult.allPeople.people],
            },
          };
        },
      });
    }
  };
  
  
