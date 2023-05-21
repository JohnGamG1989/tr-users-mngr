"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserDataSource_1 = __importDefault(require("../datasource/UserDataSource"));
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)('tc:UserService');
class UserService {
    static async getUser(uid) {
        try {
            const response = await UserDataSource_1.default.getUser(uid);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to get user information %s ', err);
            return Promise.reject(err);
        }
    }
    static async addUser(dataRequest) {
        try {
            const response = await UserDataSource_1.default.addUser(dataRequest);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to insert user %s ', err);
            return Promise.reject(err);
        }
    }
<<<<<<< HEAD
    static async getOverwriteUser(dataRequest) {
        try {
            const response = await UserDataSource_1.default.getOverwriteUser(dataRequest.nombre, dataRequest.apellido, dataRequest.telefonoCelular, dataRequest.uid);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to obtain products types- %s ', err);
=======
    static async updateToker(dataRequest) {
        try {
            const response = await UserDataSource_1.default.updateToken(dataRequest);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to insert user %s ', err);
>>>>>>> 8308c5f4576bb53bc765f0620cccbc9850ef2fab
            return Promise.reject(err);
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map