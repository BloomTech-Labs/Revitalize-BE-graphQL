import { prisma } from '../../generated/prisma-client';
const FacebookStrategy = require('passport-facebook').Strategy;

export const oAuthFacebook = new FacebookStrategy(
	{
		clientID: process.env.FACEBOOK_APP_ID,
		clientSecret: process.env.FACEBOOK_APP_SECRET,
		callbackURL: '/auth/facebook/callback',
		profileFields: ['emails'],
		proxy: true,
	},
	async (accessToken, refreshToken, profile, done) => {
		try {
			const existingUser = await prisma.userProfiles({
				where: {
					userAccountId: profile.id,
				},
			});

			if (existingUser[0]) {
				// we already have a row with the given googleId
				return done(null, existingUser);
			}

			// Create new account if user does not exists
			await prisma.createExternalAccount({
				accountId: profile.id,
			});

			const userProfile = await prisma.createUserProfile({
				email: profile.emails[0].value,
				userAccountId: profile.id,
				firstName: profile.name.givenName ? profile.name.givenName : null,
				lastName: profile.name.familyName ? profile.name.familyName : null,
				profileImage: profile.profileUrl ? profile.profileUrl : null,
			});

			done(null, userProfile);
		} catch (err) {
			throw new Error(err);
		}
	},
);
