import gql from 'graphql-tag';

export const GET_ACTIVITIES = gql`
  query ActivitiesData {
    activities {
      name
      status
    }
  }
`;

export default {};
