import { useQuery } from '@apollo/client';
import { ALL_PEOPLE_QUERY } from '../graphql/GraphqlQueries.tsx';

interface GraphQLResult {
  loading: boolean;
  error: any; 
  data: any; 
}

interface ExtendedGraphQLResult extends GraphQLResult {
  loadMore: (direction: 'next' | 'prev') => void;
}

const useGraphQL = (): ExtendedGraphQLResult => {
  const { loading, error, data, fetchMore } = useQuery(ALL_PEOPLE_QUERY);

  const loadMore = (direction: 'next' | 'prev') => {
    const cursor = direction === 'next' ? data.allPeople.pageInfo.endCursor : data.allPeople.pageInfo.startCursor;

    fetchMore({
      variables: {
        cursor,
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
  };

  return {
    loading,
    error,
    data,
    loadMore,
  };
};

export default useGraphQL;
