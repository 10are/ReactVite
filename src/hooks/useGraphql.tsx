import { useQuery } from '@apollo/client';
import { ALL_PEOPLE_QUERY } from '../graphql/GraphqlQueries.tsx';

const useGraphQL = () => {
  const { loading, error, data, fetchMore } = useQuery(ALL_PEOPLE_QUERY);

  const loadMore = () => {
    if (data.allPeople.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          cursor: data.allPeople.pageInfo.endCursor,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          const newPeople = fetchMoreResult.allPeople.people;
          const pageInfo = fetchMoreResult.allPeople.pageInfo;

          return {
            allPeople: {
              __typename: prevResult.allPeople.__typename,
              totalCount: pageInfo.hasNextPage ? prevResult.allPeople.totalCount : newPeople.length,
              people: newPeople,
              pageInfo,
            },
          };
        },
      });
    }
  };

  return {
    loading,
    error,
    data,
    loadMore,
  };
};

export default useGraphQL;



