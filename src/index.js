import '@babel/polyfill/noConflict';
import { GraphQLServer } from 'graphql-yoga';
import { resolvers, fragmentReplacements } from './resolvers';
import { prisma } from './prisma';
import passport from 'passport';

import './services/passport';

import { generateToken } from './utils/generateToken'

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

server.express.get(
	'/auth/google',
	passport.authenticate('google', {
		session: false,
		scope: ['profile', 'email']
	})
);

server.express.get(
	'/auth/google/callback',
	passport.authenticate('google', { session: false, failureRedirect: '/login' }),
	(req, res) => {
		const token = generateToken(req.user.userAccountId, req.user.id)
		return res.redirect(`localhost:3000/${token}`);
	}
);

server.start({ port: process.env.PORT }, () => {
	console.log(`GraphQL server is now running http://localhost:${process.env.PORT}`);
});
