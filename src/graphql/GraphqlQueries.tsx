
import { gql } from '@apollo/client';

export const ALL_PEOPLE_QUERY = gql`
  query AllPeople($cursor: String) {
    allPeople(first: 10, after: $cursor) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      people {
        name
        gender
        eyeColor
      }
    }
  }
`;

