import { Strategy as JwtStrategy, ExtractJwt, VerifyCallback } from 'passport-jwt';

import env from './env';

const jwtOptions = {
  secretOrKey: env.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify: VerifyCallback = async (payload, done) => {
  try {
    // TODO: Add token type check
    // if (payload.type !== TokenType.ACCESS) {
    //   throw new Error('Invalid token type');
    // }

    // TODO: Find user by id from payload.sub
    const user = 1;

    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

export default jwtStrategy;

