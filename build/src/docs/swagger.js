"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = require("../../package.json");
const config_1 = require("../config");
const swaggerDef = {
    openapi: '3.0.0',
    info: {
        title: `${package_json_1.name} API documentation`,
        version: package_json_1.version,
        license: {
            name: 'MIT',
            url: '',
        },
    },
    servers: [
        {
            url: `http://localhost:${config_1.CONFIG.port}/v1`,
        },
    ],
};
exports.default = swaggerDef;
