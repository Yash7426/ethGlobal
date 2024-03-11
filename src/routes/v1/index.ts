import express from 'express';

import authRoute from './auth.route';
import docsRoute from './docs.route';
import userRoute from './user.route';

import { CONFIG } from '../../config';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

// routes available only in development mode
const devRoutes = [
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (CONFIG.env === 'development') {
  devRoutes.forEach(route => {
    router.use(route.path, route.route);
  });
}

export default router;

