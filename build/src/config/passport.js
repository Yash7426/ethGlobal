"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const env_1 = __importDefault(require("./env"));
const jwtOptions = {
    secretOrKey: env_1.default.jwt.secret,
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
};
const jwtVerify = (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // TODO: Add token type check
        // if (payload.type !== TokenType.ACCESS) {
        //   throw new Error('Invalid token type');
        // }
        // TODO: Find user by id from payload.sub
        const user = 1;
        if (!user) {
            return done(null, false);
        }
        done(null, user);
    }
    catch (error) {
        done(error, false);
    }
});
const jwtStrategy = new passport_jwt_1.Strategy(jwtOptions, jwtVerify);
exports.default = jwtStrategy;
