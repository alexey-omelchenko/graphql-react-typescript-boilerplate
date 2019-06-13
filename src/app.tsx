import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import link from 'graphql/http-link';
import { GET_ACTIVITIES } from 'graphql/queries/activities';
import Table from 'components/table/table';

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export const App = () => (
  <ApolloProvider client={client}>
    <Query query={GET_ACTIVITIES}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return <Table activities={data.activities} />;
      }}
    </Query>
  </ApolloProvider>
);

export default App;
