"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const server = app_1.default.listen(config_1.CONFIG.port, () => {
    config_1.logger.info(`Listening to port ${config_1.CONFIG.port}`);
});
const exitHandler = () => {
    if (server) {
        server.close(() => {
            config_1.logger.info('Server closed');
            process.exit(1);
        });
    }
    else {
        process.exit(1);
    }
};
const unexpectedErrorHandler = (error) => {
    config_1.logger.error(error);
    exitHandler();
};
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', () => {
    config_1.logger.info('SIGTERM received');
    if (server) {
        server.close();
    }
});
