import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import passport from 'passport';

import { ApiError } from '../utils';
declare interface IUser {}
const verifyCallback =
  (req: any, resolve: (value?: unknown) => void, reject: (reason?: unknown) => void, requiredRights: string[]) =>
  async (err: unknown, user: IUser, info: unknown) => {
    if (err || info || !user) {
      return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
    }
    req.user = user;

    // TODO: Check if the user has the required rights
    if (requiredRights.length) {
      const userRights: any[] = [];
      const hasRequiredRights = requiredRights.every(requiredRight => userRights.includes(requiredRight));
      if (!hasRequiredRights && req.params.userId !== user) {
        return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
      }
    }

    resolve();
  };

const auth =
  (...requiredRights: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    return new Promise((resolve, reject) => {
      passport.authenticate('jwt', { session: false }, verifyCallback(req, resolve, reject, requiredRights))(
        req,
        res,
        next,
      );
    })
      .then(() => next())
      .catch(err => next(err));
  };

export default auth;

