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
const BuyerQualificationService_1 = require("../services/BuyerQualificationService");
const debug = (0, debug_1.default)('tc:BuyerQualificationController');
const BuyerQualificationController = (0, express_1.Router)();
BuyerQualificationController.get('/Buyer/getBuyerQualification/:idBuyer', RequestLogger_1.default.basic, async (req, res) => {
    try {
        const idBuyer = +req.params.idBuyer;
        console.log('idComprador', idBuyer);
        const response = await BuyerQualificationService_1.BuyerQualificationService.getBuyerQualification(idBuyer);
        res.status(http_status_1.default.OK).send(response);
    }
    catch (err) {
        const error = DebugUtilities_1.DebugUtilities.error(err, 'Error');
        debug('ERROR: POST-CoeController: %j', error.statusError);
        res.status(error.codeStatusError).send(error.statusError);
    }
});
//add buyer rating
BuyerQualificationController.post('/Buyer/addBuyerQualification', RequestLogger_1.default.basic, async (req, res) => {
    try {
        const response = await BuyerQualificationService_1.BuyerQualificationService.addBuyerQualification(req.body);
        res.status(http_status_1.default.OK).send(response);
    }
    catch (err) {
        const error = DebugUtilities_1.DebugUtilities.error(err, 'Error');
        debug('ERROR: POST-CoeController: %j', error.statusError);
        res.status(error.codeStatusError).send(error.statusError);
    }
});
exports.default = BuyerQualificationController;
//# sourceMappingURL=BuyerQualificationController.js.map