"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerService = void 0;
const debug_1 = __importDefault(require("debug"));
//data Source
const BuyerDataSource_1 = __importDefault(require("../datasource/BuyerDataSource"));
const debug = (0, debug_1.default)('tc:BuyerService');
class BuyerService {
    static async addBuyer(dataRequest) {
        try {
            const response = await BuyerDataSource_1.default.addBuyer(dataRequest);
            return Promise.resolve(response);
        }
        catch (err) {
            debug('Error trying to insert Buyer %s ', err);
            return Promise.reject(err);
        }
    }
}
exports.BuyerService = BuyerService;
//# sourceMappingURL=BuyerService.js.map