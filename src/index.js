import { GraphQLServer } from 'graphql-yoga';

// Types
import types from './resolvers/types';

// Prisma connection
import prisma from './prisma';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        ...types,
    },
    context(req) {
        return {
            prisma,
            req
        }
    }
})

server.start(() => {
	console.log('GraphQL server is now running! @ http://localhost:4000');
});
