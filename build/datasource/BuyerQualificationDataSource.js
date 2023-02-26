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
const debug = (0, debug_1.default)('tc:BuyerQualificationDataSource');
class BuyerQualificationDataSource {
}
exports.default = BuyerQualificationDataSource;
_a = BuyerQualificationDataSource;
BuyerQualificationDataSource.getBuyerQualification = async (idBuyer) => {
    debug('Starts the database query of the search configuration');
    try {
        const rqUid = 'test';
        const result = await (0, database_1.executeSQL)(`select ven_id as idVendedor, CONCAT(venUsu.usu_nombre, ' ', venUsu.usu_apellido) as nombreVendedor, com_id as idComprador , CONCAT(comUsu.usu_nombre, ' ', comUsu.usu_apellido) as nombreComprador ,cco_descripcion as comentario , tca_descripcion as calificacion , tca_valor as porcentajeCalificacion,  DATE(cco_fechaCreacion) as fechaComentario  from tr_data_base.calificacion_comprador
                inner join tr_data_base.vendedor on cco_vendedor = ven_id
                inner join tr_data_base.comprador on cco_comprador = com_id
                inner join tr_data_base.usuario as venUsu on ven_usuario = venUsu.usu_id
                inner join tr_data_base.tipo_calificacion on cco_tipoCalificacion = tca_id
                inner join tr_data_base.usuario as comUsu on com_usuario = comUsu.usu_id
                where cco_comprador = $idBuyer;`, sequelize_1.QueryTypes.SELECT, { idBuyer });
        if (result) {
            return Promise.resolve(result);
        }
        else {
            debug(`[%s] ${DebugUtilities_1.MessageError}`, rqUid, '404 NOMBRE BASE DE DATOS '); // Ajustar el nombre de la base de datos
            const bodyErrorSearchConfigInfo = {
                CodeError: 'select_calificacion_comprador-404-DB',
                Reason: 'BD error NOMBRE BASE DE DATOS',
                StatusCode: '404',
            };
            return Promise.reject(bodyErrorSearchConfigInfo);
        }
    }
    catch (err) {
        debug(`[%s] ${DebugUtilities_1.MessageError}`, err);
        return Promise.reject({ Code: 'select_calificacion_comprador', Reason: err });
    }
};
BuyerQualificationDataSource.addBuyerQualification = async (dataRequest) => {
    try {
        let idVendedor = dataRequest.idVendedor;
        let idComprador = dataRequest.idComprador;
        let idTipoComentario = dataRequest.idTipoComentario;
        let comentario = dataRequest.comentario;
        const rqUid = 'test';
        const result = await (0, database_1.executeSQL)(`INSERT INTO tr_data_base.calificacion_comprador (cco_comprador, cco_descripcion, cco_tipoCalificacion, cco_fechaCreacion, cco_vendedor,cco_activo) VALUES ($idComprador, $comentario, $idTipoComentario, now(), '1', $idVendedor);`, sequelize_1.QueryTypes.INSERT, { idComprador, comentario, idTipoComentario, idVendedor });
        if (result) {
            console.log("resultado", result);
            const response = {
                operationStatus: true,
                operationCode: "0000",
                operationMessage: "operacion exitosa"
            };
            return Promise.resolve(response);
        }
        else {
            console.log("Entra a error 1");
            debug(`[%s] ${DebugUtilities_1.MessageError}`, rqUid, '404 NOMBRE BASE DE DATOS '); // Ajustar el nombre de la base de datos
            const bodyErrorSearchConfigInfo = {
                CodeError: 'select-calificacion_vendedor-404-DB',
                Reason: 'BD error NOMBRE BASE DE DATOS',
                StatusCode: '404',
            };
            return Promise.reject(bodyErrorSearchConfigInfo);
        }
    }
    catch (err) {
        console.log("Entra a error 1");
        debug(`[%s] ${DebugUtilities_1.MessageError}`, err);
        return Promise.reject({ Code: 'select-calificacion_vendedor', Reason: err });
    }
};
//# sourceMappingURL=BuyerQualificationDataSource.js.map