import passport from 'passport';

import { oAuthGoogle } from './oauth/google';
import { oAuthFacebook } from './oauth/facebook';
import { oAuthTwitter } from './oauth/twitter';

passport.use(oAuthGoogle);
passport.use(oAuthFacebook);
passport.use(oAuthTwitter);
