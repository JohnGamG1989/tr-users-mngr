"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const DebugUtilities_1 = require("../utilities/DebugUtilities");
const debug = (0, debug_1.default)('tc:BuyerDataSource');
class BuyerDataSource {
}
exports.default = BuyerDataSource;
_a = BuyerDataSource;
BuyerDataSource.addBuyer = async (dataRequest) => {
    try {
        let usuario = dataRequest.usuario;
        let rangoBusqueda = dataRequest.rangoBusqueda;
        const rqUid = 'test';
        const result = await (0, database_1.executeSQL)(`INSERT INTO tr_data_base.comprador (com_usuario, com_rango_busqueda) VALUES ($usuario, $rangoBusqueda);`, sequelize_1.QueryTypes.INSERT, { usuario, rangoBusqueda });
        if (result) {
            console.log("resultado", result);
            const response = {
                operationStatus: true,
                operationCode: "0000",
                operationMessage: "operacion exitosa",
                idBuyer: result[0]
            };
            return Promise.resolve(response);
        }
        else {
            debug(`[%s] ${DebugUtilities_1.MessageError}`, rqUid, '404 tr_data_base'); // Ajustar el nombre de la base de datos
            const bodyErrorSearchConfigInfo = {
                CodeError: 'add-buyer-404-DB',
                Reason: 'BD error tr_data_base',
                StatusCode: '404',
            };
            return Promise.reject(bodyErrorSearchConfigInfo);
        }
    }
    catch (err) {
        debug(`[%s] ${DebugUtilities_1.MessageError}`, err);
        return Promise.reject({ Code: 'add-buyer', Reason: err });
    }
};
//# sourceMappingURL=BuyerDataSource.js.map