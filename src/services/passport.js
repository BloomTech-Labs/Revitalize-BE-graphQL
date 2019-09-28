import passport from 'passport';

import { OAuthGoogle } from './oauth/google';
import { OAuthFacebook } from './oauth/facebook';
import { OAuthTwitter } from './oauth/twitter';

passport.use(OAuthGoogle);
passport.use(OAuthFacebook);
passport.use(OAuthTwitter);
