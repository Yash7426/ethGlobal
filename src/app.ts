import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import httpStatus from 'http-status';
import passport from 'passport';

import { CONFIG, morgan, passport as jwtStrategy } from './config';
import { error, rateLimit, xss } from './middlewares';
import routes from './routes/v1';
import { ApiError } from './utils';

const app = express();

if (CONFIG.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints
if (CONFIG.env === 'production') {
  app.use('/v1/auth', rateLimit.authLimiter);
}

// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(error.errorConverter);

// handle error
app.use(error.errorHandler);

export default app;

