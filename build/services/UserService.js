"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const debug_1 = __importDefault(require("debug"));
const UserDataSource_1 = __importDefault(require("../datasource/UserDataSource"));
const debug = (0, debug_1.default)('tc:UserService');
class UserService {
    static async getUser(idUser) {
        try {
            const response = await UserDataSource_1.default.getUser(idUser);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to get user information %s ', err);
            return Promise.reject(err);
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map