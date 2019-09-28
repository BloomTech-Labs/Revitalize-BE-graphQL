import { prisma } from '../../generated/prisma-client';
const GoogleStrategy = require('passport-google-oauth20').Strategy;

export const OAuthGoogle = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: '/auth/google/callback',
		proxy: true,
	},
	async (accessToken, refreshToken, profile, done) => {
		try {
			const existingUser = await prisma.userProfiles({
				where: {
					userAccountId: profile.id,
				},
			});

			console.log(existingUser);

			if (existingUser[0]) {
				// we already have a row with the given googleId
				return done(null, existingUser[0]);
			}

			// Create new account if user does not exists
			await prisma.createExternalAccount({
				accountId: profile.id,
			});

			// Create profile for account
			const userProfile = await prisma.createUserProfile({
				email: profile.emails[0].value,
				userAccountId: profile.id,
				firstName: profile.name.givenName ? profile.name.givenName : null,
				lastName: profile.name.familyName ? profile.name.familyName : null,
				profileImage: profile.photos[0].value ? profile.photos[0].value : null,
			});

			done(null, userProfile);
		} catch (err) {
			throw new Error(err);
		}
	},
);
