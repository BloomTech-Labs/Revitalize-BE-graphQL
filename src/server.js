import '@babel/polyfill/noConflict';
import { GraphQLServer } from 'graphql-yoga';
import { resolvers } from './resolvers';
import { prisma } from './generated/prisma-client';

import passport from 'passport';
import './services/passport';
import { generateToken } from './utils/generateToken';

import * as Sentry from '@sentry/node';

export const server = new GraphQLServer({
	typeDefs: __dirname + '/schema.graphql',
	resolvers,
	context(request) {
		return {
			prisma,
			request,
		};
	},
});

Sentry.init({
	dsn: process.env.SENTRY_DSN,
});

// middleware
server.express.use(Sentry.Handlers.requestHandler()); // The request handler must be the first middleware on the app
server.express.use(passport.initialize());

server.express.get(
	'/auth/facebook',
	passport.authenticate('facebook', { scope: ['email'], authType: 'rerequest', session: false }),
);

server.express.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook', { session: false, failureRedirect: '/login' }),
	(req, res) => {
		const token = generateToken(req.user.userAccountId, req.user.id);
		return res.redirect(`${process.env.OAUTH_ROUTE}/oauth/${token}`);
	},
);

server.express.get(
	'/auth/google',
	passport.authenticate('google', {
		session: false,
		scope: ['profile', 'email'],
	}),
);

server.express.get(
	'/auth/google/callback',
	passport.authenticate('google', { session: false, failureRedirect: '/login' }),
	(req, res) => {
		const token = generateToken(req.user.userAccountId, req.user.id);
		return res.redirect(`${process.env.OAUTH_ROUTE}/oauth/${token}`);
	},
);

server.express.use(Sentry.Handlers.errorHandler()); // The error handler must be before any other error middleware and after all controllers

server.start({ port: process.env.PORT || 4000 }, () => {
	console.log(`GraphQL server is now running http://localhost:${process.env.PORT}`);
});
