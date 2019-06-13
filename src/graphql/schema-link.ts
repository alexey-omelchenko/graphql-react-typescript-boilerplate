import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { SchemaLink } from 'apollo-link-schema';
import activities from './mock-data/activities';
import typeDefs from './schema.graphql';

const schema = makeExecutableSchema({ typeDefs });

export const mocks = {
  Query: () => ({
    activities: () => activities,
  }),
};

addMockFunctionsToSchema({ mocks, schema });

export default new SchemaLink({ schema });
