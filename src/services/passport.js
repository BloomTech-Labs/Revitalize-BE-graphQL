import { prisma } from '../generated/prisma-client';
import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser((user, done) => {
	console.log(user);
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	const user = prisma.query.externalAccount({
		where: {
			accountId: id
		}
	});

	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				const existingUser = await prisma.query.userProfiles({
					where: {
						userAccountId: profile.id
					}
				});

				if (existingUser.length) {
					// we already have a row with the given googleId
					return done(null, existingUser[0]);
				}

				// Create new account if user does not exists
				await prisma.mutation.createExternalAccount({
					data: {
						accountId: profile.id
					}
				});

				const userProfile = await prisma.mutation.createUserProfile({
					data: {
						email: profile.emails[0].value,
						userAccountId: profile.id,
						firstName: profile.name.givenName !== undefined ? profile.name.givenName : null,
						lastName: profile.name.familyName !== undefined ? profile.name.familyName : null
					}
				});

				done(null, userProfile);
			} catch (err) {
				throw new Error(err);
			}
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: process.env.FACEBOOK_APP_ID,
			clientSecret: process.env.FACEBOOK_APP_SECRET,
			callbackURL: '/auth/facebook/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				const existingUser = await prisma.query.userProfiles({
					where: {
						userAccountId: profile.id
					}
				});

				if (existingUser.length) {
					// we already have a row with the given googleId
					return done(null, existingUser[0]);
				}

				// Create new account if user does not exists
				await prisma.mutation.createExternalAccount({
					data: {
						accountId: profile.id
					}
				});

				const userProfile = await prisma.mutation.createUserProfile({
					data: {
						email: profile.emails[0].value,
						userAccountId: profile.id,
						firstName: profile.name.givenName !== undefined ? profile.name.givenName : null,
						lastName: profile.name.familyName !== undefined ? profile.name.familyName : null
					}
				});

				done(null, userProfile);
			} catch (err) {
				throw new Error(err);
			}
		}
	)
);
