import { IUserAddRequest } from '../model/Request/IUserAddRequest';
import { IUserAddResponse } from '../model/Response/IUserAddResponse';
//Model
import { IUserResponse } from '../model/Response/IUserResponse';
import { MessageError } from '../utilities/DebugUtilities';
import { QueryTypes } from 'sequelize';
import debugLib from 'debug';
import { executeSQL } from '../database/database';

const debug = debugLib('tc:UserDataSource');

export default class UserDataSource {
    static getOverwriteRange(rangoBusqueda: any, idComprador: any) {
        throw new Error('Method not implemented.');
    }


    public static readonly getUser = async (uid: string): Promise<IUserResponse> => {
        debug('Start query to user database');
        try {
            const rqUid = 'test';
            const result = await executeSQL(
                `select
                usu_id as idUsuario,
                usu_UID as uid,
                usu_nombre as nombre,
                usu_apellido as Apellido,
                usu_telefonoFijo as telFijo,
                usu_telefonoCelular as telCelular,
                usu_correo as correo,
                usu_fechaNacimiento as fechaNacimiento,
                tdo_id as idTipoDocumento,
                usu_numeroDocumento as numeroDocumento,
                tdo_descripcion as tipoDocumento,
                tpe_id as idTipoPersona,
                tpe_descripcion as tipoPersona,
                com_rango_busqueda as rangoBusqueda,
                ! isnull(com_id) as PerfilComprador,
                ! isnull(ven_id) as PerfilVendedor
              from
                tr_data_base.usuario
                left join tr_data_base.comprador on usu_id = com_usuario
                left join tr_data_base.vendedor on usu_id = ven_usuario
                left join tr_data_base.tipo_documento on tdo_id = usu_tipoDocumento
                left join tr_data_base.tipo_persona on tpe_id = usu_tipoPersona
                where usu_UID = $uid;`,
                QueryTypes.SELECT,
                { uid }
            );
            if (result) {
                return Promise.resolve(result);
            } else {
                debug(`[%s] ${MessageError}`, rqUid, '404 tr_data_base'); // Ajustar el nombre de la base de datos
                const bodyErrorSearchConfigInfo = {
                    CodeError: 'select_user-404-DB',
                    Reason: 'BD error tr_data_base', // Ajustar el nombre de la base de datos
                    StatusCode: '404',
                };
                return Promise.reject(bodyErrorSearchConfigInfo);
            }

        } catch (err) {
            debug(`[%s] ${MessageError}`, err);
            return Promise.reject({ Code: 'select_user', Reason: err });
        }
    }


    public static readonly addUser = async (dataRequest: IUserAddRequest): Promise<IUserAddResponse> => {
        try {

            let correo = dataRequest.correo;
            let uid = dataRequest.uid;
            const rqUid = 'test';
            const result = await executeSQL(
                `INSERT INTO tr_data_base.usuario (usu_correo, usu_fechaCreacion, usu_activo, usu_UID) VALUES ($correo, now(), '1', $uid);`,
                QueryTypes.INSERT,
                { correo, uid }
            );
            if (result) {
                console.log("resultado", result);
                const response = {
                    operationStatus: true,
                    operationCode: "0000",
                    operationMessage: "operacion exitosa",
                    idUsuario: result[0]
                };
                return Promise.resolve(response);
            } else {
                debug(`[%s] ${MessageError}`, rqUid, '404 tr_data_base'); // Ajustar el nombre de la base de datos
                const bodyErrorSearchConfigInfo = {
                    CodeError: 'add-user-404-DB',
                    Reason: 'BD error tr_data_base', // Ajustar el nombre de la base de datos
                    StatusCode: '404',
                };
                return Promise.reject(bodyErrorSearchConfigInfo);
            }

        } catch (err) {
            debug(`[%s] ${MessageError}`, err);
            return Promise.reject({ Code: 'add-user', Reason: err });
        }
    };

<<<<<<< HEAD
    // eslint-disable-next-line max-len
    public static readonly getOverwriteUser = async (nombre: string, apellido: string, telefonoCelular: number, uid:number): Promise<IUserAddResponse> => {
        debug('Starts the database query of the update');
        try {
            // eslint-disable-next-line max-len
            const result = await executeSQL( //El query esta mal, select solo es para traer datos, buscar como se hace un update en sql
                `UPDATE
                tr_data_base.usuario
              SET
                usu_apellido = $apellido,
                usu_nombre = $nombre,
                usu_telefonoCelular = $telefonoCelular
              WHERE
                usu_id = $uid`,
                QueryTypes.UPDATE,  // reemplazar la palabra select por UPDATE
                { nombre, apellido, telefonoCelular, uid }
            );
            console.log(result)
            if (result) {
                console.log("resultado", result);
                const response = {
                    operationStatus: true,
                    operationCode: "0000",
                    operationMessage: "operacion exitosa"
                } as IUserAddResponse;
                return Promise.resolve(response);
            } else {
                debug(`${MessageError}`, '404 TR_DATA_BASE');
                const bodyError = {
                    CodeError: 'SELECT-SEARCH-PRODUCT-TYPES-404-DB',
                    Reason: 'BD error TR_DATA_BASE',
                    StatusCode: '404',
                };
                return Promise.reject(bodyError);
=======
    public static readonly updateToken = async (dataRequest : any): Promise<IUserAddResponse> => {
        try {

            const token = dataRequest.token;
            const uid = dataRequest.uid;

            const rqUid = 'test';
            const result = await executeSQL(
                `UPDATE tr_data_base.usuario
                    SET usu_token = $token
                WHERE usu_UID = $uid; `,
                QueryTypes.UPDATE,
                { token, uid }
            );
            if (result) {
                console.log("resultado",result);
                 const response = {
                    operationStatus: true,
                    operationCode: "0000",
                    operationMessage:"operacion exitosa",
                    idUsuario:result[0]
                };
                return Promise.resolve(response);
            } else {
                debug(`[%s] ${MessageError}`, rqUid, '404 tr_data_base'); // Ajustar el nombre de la base de datos
                const bodyErrorSearchConfigInfo = {
                    CodeError: 'add-user-404-DB',
                    Reason: 'BD error tr_data_base', // Ajustar el nombre de la base de datos
                    StatusCode: '404',
                };
                return Promise.reject(bodyErrorSearchConfigInfo);
>>>>>>> 8308c5f4576bb53bc765f0620cccbc9850ef2fab
            }

        } catch (err) {
            debug(`[%s] ${MessageError}`, err);
<<<<<<< HEAD
            return Promise.reject({ Code: 'SELECT-SEARCH-PRODUCT-TYPES', Reason: err });
        }
    };
}
=======
            return Promise.reject({ Code: 'add-user', Reason: err });
        }
    };

   }
>>>>>>> 8308c5f4576bb53bc765f0620cccbc9850ef2fab
