"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.exclude = void 0;
/**
 * Exclude keys from object
 * @param obj
 * @param keys
 * @returns
 */
const exclude = (obj, keys) => {
    for (const key of keys) {
        delete obj[key];
    }
    return obj;
};
exports.exclude = exclude;
/**
 * Pick keys from object
 * @param obj
 * @param keys
 * @returns
 */
const pick = (obj, keys) => {
    return keys.reduce((finalObj, key) => {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            finalObj[key] = obj[key];
        }
        return finalObj;
    }, {});
};
exports.pick = pick;
