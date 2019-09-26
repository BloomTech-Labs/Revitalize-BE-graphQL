import '@babel/polyfill/noConflict';
import { GraphQLServer } from 'graphql-yoga';
import { resolvers } from './resolvers';
import { prisma } from './generated/prisma-client';
import passport from 'passport';
import './services/passport';

import { generateToken } from './utils/generateToken'

export const server = new GraphQLServer({
	typeDefs: __dirname + '/schema.graphql',
	resolvers,
	context(request) {
		return {
			prisma,
			request
		};
	}
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
		return res.redirect(`http://localhost:3000/oauth/${token}`);
	}
);

server.start({ port: process.env.PORT || 4000 }, () => {
	console.log(`GraphQL server is now running http://localhost:${process.env.PORT}`);
});
