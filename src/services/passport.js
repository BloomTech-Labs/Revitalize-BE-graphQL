import passport from 'passport';

import { OAuthGoogle } from './OAuth/google';
import { OAuthFacebook } from './OAuth/facebook';
import { OAuthTwitter } from './OAuth/twitter';

passport.use(OAuthGoogle);
passport.use(OAuthFacebook);
passport.use(OAuthTwitter);
