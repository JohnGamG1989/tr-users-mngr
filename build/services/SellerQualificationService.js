"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerQualificationService = void 0;
const debug_1 = __importDefault(require("debug"));
const SellerQualificationDataSource_1 = __importDefault(require("../datasource/SellerQualificationDataSource"));
const debug = (0, debug_1.default)('tc:SellerQualificationService');
class SellerQualificationService {
    static async getSellerQualification(idSeller) {
        try {
            const response = await SellerQualificationDataSource_1.default.getSellerQualification(idSeller);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to obtain the search configuration %s ', err);
            return Promise.reject(err);
        }
    }
    static async addSellerQualification(dataRequest) {
        try {
            const response = await SellerQualificationDataSource_1.default.addSellerQualification(dataRequest);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to obtain the search configuration %s ', err);
            return Promise.reject(err);
        }
    }
}
exports.SellerQualificationService = SellerQualificationService;
//# sourceMappingURL=SellerQualificationService.js.map