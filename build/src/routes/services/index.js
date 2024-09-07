"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const reclaim_data_1 = __importDefault(require("../../reclaim/reclaim_data"));
const reclaim_request_1 = __importDefault(require("../../reclaim/reclaim_request"));
router.all('/proof', reclaim_data_1.default);
router.all('/requestUrl', reclaim_request_1.default);
exports.default = router;
