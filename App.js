/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ApolloClient} from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';
import {setContext} from 'apollo-link-context';
import {getToken} from './app/utils/authentication';
import Navigation from './app/screens/Navigation/Navigation';
import {GRAPHQL_URL} from './app/utils/communication';
import introspectionQueryResultData from './app/fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
});
// Uncomment avobe code to localhost connection.
// const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });
const authLink = setContext(async (req, {headers}) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = authLink.concat(httpLink);
const cache = new InMemoryCache({fragmentMatcher});

const client = new ApolloClient({
  link,
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
