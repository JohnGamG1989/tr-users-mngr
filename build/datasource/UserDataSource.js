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
const debug = (0, debug_1.default)('tc:UserDataSource');
class UserDataSource {
}
exports.default = UserDataSource;
_a = UserDataSource;
UserDataSource.getUser = async (uid) => {
    debug('Start query to user database');
    try {
        const rqUid = 'test';
        const result = await (0, database_1.executeSQL)(`select usu_id as idUsuario,usu_nombre as nombre , usu_apellido as Apellido,  usu_telefonoFijo as telFijo, usu_telefonoCelular as telCelular,usu_correo as correo,usu_fechaNacimiento as fechaNacimiento,tdo_id as idTipoDocumento,usu_numeroDocumento as numeroDocumento ,tdo_descripcion as tipoDocumento,tpe_id as idTipoPersona,tpe_descripcion as tipoPersona,com_rango_busqueda as rangoBusqueda, !isnull(com_id) as PerfilComprador, !isnull(ven_id ) as PerfilVendedor from tr_data_base.usuario
                left join tr_data_base.comprador on usu_id = com_usuario
                left join tr_data_base.vendedor on usu_id = ven_usuario
                inner join tr_data_base.tipo_documento on tdo_id = usu_tipoDocumento
                inner join tr_data_base.tipo_persona on  tpe_id = usu_tipoPersona
                where usu_UID = $uid;`, sequelize_1.QueryTypes.SELECT, { uid });
        if (result) {
            return Promise.resolve(result);
        }
        else {
            debug(`[%s] ${DebugUtilities_1.MessageError}`, rqUid, '404 tr_data_base'); // Ajustar el nombre de la base de datos
            const bodyErrorSearchConfigInfo = {
                CodeError: 'select_user-404-DB',
                Reason: 'BD error tr_data_base',
                StatusCode: '404',
            };
            return Promise.reject(bodyErrorSearchConfigInfo);
        }
    }
    catch (err) {
        debug(`[%s] ${DebugUtilities_1.MessageError}`, err);
        return Promise.reject({ Code: 'select_user', Reason: err });
    }
};
UserDataSource.addUser = async (dataRequest) => {
    try {
        let correo = dataRequest.correo;
        let uid = dataRequest.uid;
        const rqUid = 'test';
        const result = await (0, database_1.executeSQL)(`INSERT INTO tr_data_base.usuario (usu_correo, usu_fechaCreacion, usu_activo, usu_UID) VALUES ($correo, now(), '1', $uid);`, sequelize_1.QueryTypes.INSERT, { correo, uid });
        if (result) {
            console.log("resultado", result);
            const response = {
                operationStatus: true,
                operationCode: "0000",
                operationMessage: "operacion exitosa",
                idUsuario: result[0]
            };
            return Promise.resolve(response);
        }
        else {
            debug(`[%s] ${DebugUtilities_1.MessageError}`, rqUid, '404 tr_data_base'); // Ajustar el nombre de la base de datos
            const bodyErrorSearchConfigInfo = {
                CodeError: 'add-user-404-DB',
                Reason: 'BD error tr_data_base',
                StatusCode: '404',
            };
            return Promise.reject(bodyErrorSearchConfigInfo);
        }
    }
    catch (err) {
        debug(`[%s] ${DebugUtilities_1.MessageError}`, err);
        return Promise.reject({ Code: 'add-user', Reason: err });
    }
};
//# sourceMappingURL=UserDataSource.js.map