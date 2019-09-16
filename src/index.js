import '@babel/polyfill/noConflict';
import { GraphQLServer } from 'graphql-yoga';
import { resolvers, fragmentReplacements } from './resolvers';
import prisma from './prisma';
import passport from 'passport';

export const server = new GraphQLServer({
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

server.express.use(passport.initialize());

server.start({ port: process.env.PORT || 4000 }, () => {
	console.log('GraphQL server is now running!');
});
