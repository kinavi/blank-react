import passport from 'passport';
import passportJWT from 'passport-jwt';

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.jwt;
  }
  return token;
};

const JwtStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;
ExtractJwt.cookieExtractor = cookieExtractor;

const StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromHeader(),
  secretOrKey: 'secret',
  issuer: 'key-name',
  audience: 'xz-chto',
};

const verify = (jwt_payload, done) => {
  console.log('jwt_payload', jwt_payload);
  console.log('verify');
};

passport.use(new JwtStrategy(StrategyOptions, verify));

export default passport;
