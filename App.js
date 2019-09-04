/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';
import {setContext} from 'apollo-link-context';
import {getToken} from './app/utils/authentication';
import Navigation from './app/screens/Navigation/Navigation';

const httpLink = new HttpLink({uri: 'http://192.168.88.30:4000/graphql'});
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

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
