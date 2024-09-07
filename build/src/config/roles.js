"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRights = exports.roles = void 0;
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
})(Role || (Role = {}));
const allRoles = {
    [Role.USER]: [],
    [Role.ADMIN]: ['getUsers', 'manageUsers'],
};
exports.roles = Object.keys(allRoles);
exports.roleRights = new Map(Object.entries(allRoles));
