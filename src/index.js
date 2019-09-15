import { GraphQLServer } from 'graphql-yoga';

import { resolvers, fragmentReplacements } from './resolvers';

import prisma from './prisma';

const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers,
	context(request) {
		return {
			prisma,
			request
		};
	},
	fragmentReplacements
});

server.start(() => {
	console.log('GraphQL server is now running! @ http://localhost:4000');
});
