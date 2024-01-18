import { gql } from '@apollo/client';

export const ALL_PEOPLE_QUERY = gql`
  query AllPeople($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      totalCount
      people {
        name
        gender
        eyeColor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  `;



