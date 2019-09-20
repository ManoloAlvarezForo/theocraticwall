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
import {split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';
import {setContext} from 'apollo-link-context';
import {getToken} from './app/utils/asyncStorageHandler';
import Navigation from './app/screens/Navigation/Navigation';
import {GRAPHQL_URL} from './app/utils/communication';
import introspectionQueryResultData from './app/fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
});

const connectionParams = async () => ({
  authorization: await getToken(),
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: GRAPHQL_URL,
  options: {
    reconnect: true,
    lazy: true,
    connectionParams,
  },
});

// Uncomment avobe code to localhost connection.
// const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });
const authLink = setContext(async (req, {headers}) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache({fragmentMatcher});

const client = new ApolloClient({
  link: authLink.concat(link),
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
