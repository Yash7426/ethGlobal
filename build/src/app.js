"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const http_status_1 = __importDefault(require("http-status"));
const passport_1 = __importDefault(require("passport"));
const config_1 = require("./config");
const middlewares_1 = require("./middlewares");
const v1_1 = __importDefault(require("./routes/v1"));
const services_1 = __importDefault(require("./routes/services"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
if (config_1.CONFIG.env !== 'test') {
    app.use(config_1.morgan.successHandler);
    app.use(config_1.morgan.errorHandler);
}
// set security HTTP headers
app.use((0, helmet_1.default)());
// parse json request body
app.use(express_1.default.json());
// parse urlencoded request body
app.use(express_1.default.urlencoded({ extended: true }));
// sanitize request data
app.use((0, middlewares_1.xss)());
// gzip compression
app.use((0, compression_1.default)());
// enable cors
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
// jwt authentication
app.use(passport_1.default.initialize());
passport_1.default.use('jwt', config_1.passport);
// limit repeated failed requests to auth endpoints
if (config_1.CONFIG.env === 'production') {
    app.use('/v1/auth', middlewares_1.rateLimit.authLimiter);
}
// v1 api routes
app.use('/v1', v1_1.default);
// reclaim api routes
app.use('/services', services_1.default);
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new utils_1.ApiError(http_status_1.default.NOT_FOUND, 'Not found'));
});
// convert error to ApiError, if needed
app.use(middlewares_1.error.errorConverter);
// handle error
app.use(middlewares_1.error.errorHandler);
exports.default = app;
