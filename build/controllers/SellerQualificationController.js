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
const SellerQualificationService_1 = require("../services/SellerQualificationService");
const debug = (0, debug_1.default)('tc:SellerQualificationController');
const SellerQualificationController = (0, express_1.Router)();
//get seller ratings
SellerQualificationController.get('/Seller/getSellerQualification/:idSeller', RequestLogger_1.default.basic, async (req, res) => {
    try {
        const idSeller = +req.params.idSeller;
        console.log('idVendedor', idSeller);
        const response = await SellerQualificationService_1.SellerQualificationService.getSellerQualification(idSeller);
        res.status(http_status_1.default.OK).send(response);
    }
    catch (err) {
        const error = DebugUtilities_1.DebugUtilities.error(err, 'Error');
        debug('ERROR: POST-CoeController: %j', error.statusError);
        res.status(error.codeStatusError).send(error.statusError);
    }
});
//add seller rating
SellerQualificationController.post('/Seller/addSellerQualification', RequestLogger_1.default.basic, async (req, res) => {
    try {
        const response = await SellerQualificationService_1.SellerQualificationService.addSellerQualification(req.body);
        res.status(http_status_1.default.OK).send(response);
    }
    catch (err) {
        const error = DebugUtilities_1.DebugUtilities.error(err, 'Error');
        debug('ERROR: POST-CoeController: %j', error.statusError);
        res.status(error.codeStatusError).send(error.statusError);
    }
});
exports.default = SellerQualificationController;
//# sourceMappingURL=SellerQualificationController.js.map