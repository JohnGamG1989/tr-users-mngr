"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerService = void 0;
const debug_1 = __importDefault(require("debug"));
//data Source
const SellerDataSource_1 = __importDefault(require("../datasource/SellerDataSource"));
const debug = (0, debug_1.default)('tc:SellerService');
class SellerService {
    static async addSeller(dataRequest) {
        try {
            const response = await SellerDataSource_1.default.addSeller(dataRequest);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to insert Seller %s ', err);
            return Promise.reject(err);
        }
    }
}
exports.SellerService = SellerService;
//# sourceMappingURL=SellerService.js.map