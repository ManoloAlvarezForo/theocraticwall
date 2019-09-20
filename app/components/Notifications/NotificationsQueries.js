import gql from 'graphql-tag';

/**
 * GraphQL Query to gets an Calendar Event by a Event Id from the Server
 */
export const GET_UNREAD_NOTIFICATIONS_SIZE = gql`
  query getUnreadNotificationsSize($userId: String) {
    getUnreadNotificationsSize(userId: $userId) {
      size
    }
  }
`;
