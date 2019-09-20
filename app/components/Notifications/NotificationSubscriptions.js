import gql from 'graphql-tag';

export const NOTIFICATION_SENT = gql`
  subscription notificationSent {
    notificationSent {
      title
      text
      id
      createdDate
    }
  }
`;
