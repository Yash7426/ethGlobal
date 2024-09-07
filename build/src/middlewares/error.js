"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const config_1 = require("../config");
const utils_1 = require("../utils");
const errorConverter = (err, req, res, next) => {
    let error = err;
    if (!(error instanceof utils_1.ApiError)) {
        const statusCode = error.statusCode ? http_status_1.default.BAD_REQUEST : http_status_1.default.INTERNAL_SERVER_ERROR;
        const message = error.message || http_status_1.default[statusCode];
        error = new utils_1.ApiError(statusCode, message, false, err.stack);
    }
    next(error);
};
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
    if (config_1.CONFIG.env === 'production' && !err.isOperational) {
        statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
        message = http_status_1.default[http_status_1.default.INTERNAL_SERVER_ERROR];
    }
    res.locals.errorMessage = err.message;
    const response = Object.assign({ code: statusCode, message }, (config_1.CONFIG.env === 'development' && { stack: err.stack }));
    if (config_1.CONFIG.env === 'development') {
        config_1.logger.error(err);
    }
    res.status(statusCode).send(response);
};
const erorMiddleware = {
    errorConverter,
    errorHandler,
};
exports.default = erorMiddleware;
