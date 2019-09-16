import { server } from '../index';
import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser((user, done) => {
    console.log(user)
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log(id)
	// User.findById(id).then(user => {
	// 	done(null, user);
    // });
    // server.query.
});

passport.use(
	new GoogleStrategy(
		{
			clientID: '',
			clientSecret: '',
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
            console.log(profile)
			// const existingUser = await User.findOne({ googleId: profile.id });

			// if (existingUser) {
			// 	// we already have a record with the given googleId
			// 	return done(null, existingUser);
			// }

			// // we dont have a user record with this ID, create new collection
			// const user = await new User({ googleId: profile.id }).save();
			// done(null, user);
		}
	)
);
