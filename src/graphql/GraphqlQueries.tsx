
import { gql } from '@apollo/client';

export const ALL_PEOPLE_QUERY = gql`
  query AllPeople($cursor: String) {
    allPeople(first: 15, after: $cursor) {
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

export const EXCEL_QUERY = gql`
query AllPeople {
  allPeople {
  totalCount
  people
  {
  name
  gender
  eyeColor
  }
  }
 }
 `;