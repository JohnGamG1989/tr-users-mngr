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
const SellerService_1 = require("../services/SellerService");
const debug = (0, debug_1.default)('tc:SellerController');
const SellerController = (0, express_1.Router)();
//add Seller
SellerController.post('/User/addSeller', RequestLogger_1.default.basic, async (req, res) => {
    try {
        const response = await SellerService_1.SellerService.addSeller(req.body);
        res.status(http_status_1.default.OK).send(response);
    }
    catch (err) {
        const error = DebugUtilities_1.DebugUtilities.error(err, 'Error');
        debug('ERROR: POST-AddSeller: %j', error.statusError);
        res.status(error.codeStatusError).send(error.statusError);
    }
});
exports.default = SellerController;
//# sourceMappingURL=SellerController.js.map