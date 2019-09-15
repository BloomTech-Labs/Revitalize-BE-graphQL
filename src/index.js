import { GraphQLServer } from 'graphql-yoga';

import { Query } from './resolvers/queries';
import { Mutation } from './resolvers/mutations';
import { Types } from './resolvers/types';

import prisma from './prisma';

const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers: {
		Query,
		Mutation,
		...Types
	},
	context(request) {
		return {
			prisma,
			request
		};
	}
});

server.start(() => {
	console.log('GraphQL server is now running! @ http://localhost:4000');
});
