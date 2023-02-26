"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const express_1 = require("express");
const RequestLogger_1 = __importDefault(require("../utilities/RequestLogger"));
const http_status_1 = __importDefault(require("http-status"));
const DebugUtilities_1 = require("../utilities/DebugUtilities");
//Services
const UserService_1 = require("../services/UserService");
const debug = (0, debug_1.default)('tc:UserController');
const UserController = (0, express_1.Router)();
UserController.get('/User/getUser/:idUser', RequestLogger_1.default.basic, async (req, res) => {
    try {
        const idUser = +req.params.idUser;
        console.log('idUser', idUser);
        const response = await UserService_1.UserService.getUser(idUser);
        res.status(http_status_1.default.OK).send(response);
    }
    catch (err) {
        const error = DebugUtilities_1.DebugUtilities.error(err, 'Error');
        debug('ERROR: Get-User: %j', error.statusError);
        res.status(error.codeStatusError).send(error.statusError);
    }
});
exports.default = UserController;
//# sourceMappingURL=UserController.js.map