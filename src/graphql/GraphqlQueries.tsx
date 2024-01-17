import { gql } from '@apollo/client';

// fist 15'i burada yönetme
// tek query'de hallet 
// debounce kullan
// usehooks.com (debounce)
// prettier ekleme
// index.ccss stylede tut
// env url kullan
// console.lgo bırkam
// zustand


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



