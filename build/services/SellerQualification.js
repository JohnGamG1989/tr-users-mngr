"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerQualificationService = void 0;
const debug_1 = __importDefault(require("debug"));
const SellerQualification_1 = __importDefault(require("../datasource/SellerQualification"));
const debug = (0, debug_1.default)('tc:SellerQualificationService');
class SellerQualificationService {
    static async getSellerQualification() {
        try {
            const response = await SellerQualification_1.default.getSellerQualification();
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to obtain the search configuration %s ', err);
            return Promise.reject(err);
        }
    }
}
exports.SellerQualificationService = SellerQualificationService;
//# sourceMappingURL=SellerQualification.js.map