import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ALL_PEOPLE_QUERY } from './GraphqlQueries.tsx';

const client = new ApolloClient({
  uri: import.meta.env.VITE_REACT_APP_API_URL as string,
  cache: new InMemoryCache(),
});

client.query({
    query: ALL_PEOPLE_QUERY,
  })
export default client;
