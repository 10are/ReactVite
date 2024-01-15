import { useQuery } from '@apollo/client';
import { ALL_PEOPLE_QUERY } from '../graphql/GraphqlQueries.tsx';

const useGraphQL = () => {
  const { loading, error, data, fetchMore } = useQuery(ALL_PEOPLE_QUERY);

  const loadMore = () => {
    fetchMore({
      variables: {
        cursor: data.allPeople.pageInfo.endCursor,
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
