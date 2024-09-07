"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const joi_1 = __importDefault(require("joi"));
const utils_1 = require("../utils");
const validate = (schema) => (req, res, next) => {
    const validSchema = utils_1.objectUtils.pick(schema, ['params', 'query', 'body']);
    const obj = utils_1.objectUtils.pick(req, Object.keys(validSchema));
    const { value, error } = joi_1.default.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(obj);
    if (error) {
        const errorMessage = error.details.map(details => details.message).join(', ');
        return next(new utils_1.ApiError(http_status_1.default.BAD_REQUEST, errorMessage));
    }
    Object.assign(req, value);
    return next();
};
exports.default = validate;
