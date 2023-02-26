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
const debug = (0, debug_1.default)('tc:SellerQualification');
class SellerQualification {
}
exports.default = SellerQualification;
_a = SellerQualification;
SellerQualification.getSellerQualification = async () => {
    debug('Starts the database query of the search configuration');
    try {
        const rqUid = 'test';
        const result = await (0, database_1.executeSQL)(`select ven_id as idVendedor, CONCAT(venUsu.usu_nombre, ' ', venUsu.usu_apellido) as nombreVendedor, com_id as idComprador , CONCAT(comUsu.usu_nombre, ' ', comUsu.usu_apellido) as nombreComprador ,cve_descripcion as comentario , tca_descripcion as calificacion , tca_valor as porcentajeCalificacion,  DATE(cve_fechaCreacion) as fechaComentario  from tr_data_base.calificacion_vendedor
                inner join vendedor on cve_vendedor = ven_id
                inner join comprador on cve_comprador = com_id
                inner join usuario as venUsu on ven_usuario = venUsu.usu_id
                inner join tipo_calificacion on cve_tipoCalificacion = tca_id
                inner join usuario as comUsu on com_usuario = comUsu.usu_id;`, sequelize_1.QueryTypes.SELECT, {});
        if (result) {
            return Promise.resolve(result);
        }
        else {
            debug(`[%s] ${DebugUtilities_1.MessageError}`, rqUid, '404 NOMBRE BASE DE DATOS '); // Ajustar el nombre de la base de datos
            const bodyErrorSearchConfigInfo = {
                CodeError: 'SELECT-SEARCH_CONFIG-ENTITY-404-DB',
                Reason: 'BD error NOMBRE BASE DE DATOS',
                StatusCode: '404',
            };
            return Promise.reject(bodyErrorSearchConfigInfo);
        }
    }
    catch (err) {
        debug(`[%s] ${DebugUtilities_1.MessageError}`, err);
        return Promise.reject({ Code: 'SELECT-SEARCH_CONFIG-ENTITY', Reason: err });
    }
};
//# sourceMappingURL=SellerQualification.js.map