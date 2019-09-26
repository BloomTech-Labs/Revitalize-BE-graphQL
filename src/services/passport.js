import passport from 'passport';
import {oAuthGoogle} from './oauth/google';
const FacebookStrategy = require('passport-facebook').Strategy;

// OAuth
passport.use(oAuthGoogle);

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
					return done(null, existingUser);
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
