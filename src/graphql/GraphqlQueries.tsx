
import { gql } from '@apollo/client';

export const ALL_PEOPLE_QUERY = gql`
  query AllPeople {
    allPeople {
      totalCount
      people {
        name
        gender
        eyeColor
      }
    }
  }
`;
