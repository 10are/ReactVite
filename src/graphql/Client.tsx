import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ALL_PEOPLE_QUERY } from './GraphqlQueries.tsx';


const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

client.query({
    query: ALL_PEOPLE_QUERY,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  

export default client;
