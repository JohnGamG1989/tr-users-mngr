import debugLib from 'debug';
import { QueryTypes } from 'sequelize';
import { executeSQL } from '../database/database';
import { MessageError } from '../utilities/DebugUtilities';
//Model
import { IUserResponse } from '../model/Response/IUserResponse';


const debug = debugLib('tc:UserDataSource');

export default class UserDataSource {


    public static readonly getUser = async (idUser : number): Promise<IUserResponse> => {
        debug('Start query to user database');
        try {
            const rqUid = 'test';
            const result = await executeSQL(
                `select usu_id as idUsuario,usu_nombre as nombre , usu_apellido as Apellido,  usu_telefonoFijo as telFijo, usu_telefonoCelular as telCelular,usu_correo as correo,usu_fechaNacimiento as fechaNacimiento,tdo_id as idTipoDocumento ,tdo_descripcion as tipoDocumento,tpe_id as idTipoPersona,tpe_descripcion as tipoPersona,com_rango_busqueda as rangoBusqueda, !isnull(com_id) as PerfilComprador, !isnull(ven_id ) as PerfilVendedor from tr_data_base.usuario
                left join tr_data_base.comprador on usu_id = com_usuario
                left join tr_data_base.vendedor on usu_id = ven_id
                inner join tr_data_base.tipo_documento on tdo_id = usu_tipoDocumento
                inner join tr_data_base.tipo_persona on  tpe_id = usu_tipoPersona
                where usu_id = $idUser;`,
                QueryTypes.SELECT,
                {idUser}
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
}