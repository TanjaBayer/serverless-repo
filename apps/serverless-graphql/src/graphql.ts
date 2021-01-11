import 'source-map-support/register';
import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-lambda';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { buildSchemaSync } from 'type-graphql';
import { Container } from 'typedi';

import { AssetResolver } from './asset.resolver';

buildSchemaSync({ resolvers: [AssetResolver] });
const schema = buildSchemaSync({
  resolvers: [AssetResolver],
  container: Container,
});

const server = new ApolloServer({
  schema: schema,
  playground: true,
  introspection: true,
});
const handler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});

export const graphqlHandler: APIGatewayProxyHandler = handler;
