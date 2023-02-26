"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerQualificationService = void 0;
const debug_1 = __importDefault(require("debug"));
const BuyerQualificationDataSource_1 = __importDefault(require("../datasource/BuyerQualificationDataSource"));
const debug = (0, debug_1.default)('tc:BuyerQualificationService');
class BuyerQualificationService {
    static async getBuyerQualification(idBuyer) {
        try {
            const response = await BuyerQualificationDataSource_1.default.getBuyerQualification(idBuyer);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to obtain the search configuration %s ', err);
            return Promise.reject(err);
        }
    }
    static async addBuyerQualification(dataRequest) {
        try {
            const response = await BuyerQualificationDataSource_1.default.addBuyerQualification(dataRequest);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to obtain the search configuration %s ', err);
            return Promise.reject(err);
        }
    }
}
exports.BuyerQualificationService = BuyerQualificationService;
//# sourceMappingURL=BuyerQualificationService.js.map