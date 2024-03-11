import { name, version } from '../../package.json';
import { CONFIG } from '../config';

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: `${name} API documentation`,
    version,
    license: {
      name: 'MIT',
      url: '',
    },
  },
  servers: [
    {
      url: `http://localhost:${CONFIG.port}/v1`,
    },
  ],
};

export default swaggerDef;

