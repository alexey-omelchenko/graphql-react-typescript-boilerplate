import React from 'react';
import { Query } from 'react-apollo';
import { storiesOf } from '@storybook/react';
import apolloStorybookDecorator from 'apollo-storybook-react';
import typeDefs from 'graphql/schema.graphql';
import { mocks } from 'graphql/schema-link';
import { GET_ACTIVITIES } from 'graphql/queries/activities';

import Table from './table';

storiesOf('Component/Table', module)
  .addDecorator(apolloStorybookDecorator({ typeDefs, mocks }))
  .add('rendered table', () => (
    <Query query={GET_ACTIVITIES}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return <Table activities={data.activities} />;
      }}
    </Query>
  ));
