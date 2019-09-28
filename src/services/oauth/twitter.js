import { prisma } from '../../generated/prisma-client';

const TwitterStrategy = require('passport-twitter').Strategy;

export const OAuthTwitter = new TwitterStrategy(
	{
		consumerKey: process.env.TWITTER_API_KEY,
		consumerSecret: process.env.TWITTER_API_SECRET,
		callbackURL: '/auth/twitter/callback',
		proxy: true,
	},
	async (accessToken, refreshToken, profile, done) => {
		try {
            console.log(profile)
			const existingUser = await prisma.query.userProfiles({
				where: {
					userAccountId: profile.id,
				},
			});

			if (existingUser.length) {
				// we already have a row with the given googleId
				return done(null, existingUser);
			}

			// Create new account if user does not exists
			// await prisma.mutation.createExternalAccount({
			// 	data: {
			// 		accountId: profile.id,
			// 	},
			// });

			// const userProfile = await prisma.mutation.createUserProfile({
			// 	data: {
			// 		email: profile.emails[0].value,
			// 		userAccountId: profile.id,
			// 		firstName: profile.name.givenName !== undefined ? profile.name.givenName : null,
			// 		lastName: profile.name.familyName !== undefined ? profile.name.familyName : null,
			// 	},
			// });

			done(null, userProfile);
		} catch (err) {
			throw new Error(err);
		}
	},
);
