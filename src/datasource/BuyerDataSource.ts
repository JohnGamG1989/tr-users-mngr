import debugLib from 'debug';
import { QueryTypes } from 'sequelize';
import { executeSQL } from '../database/database';
import { MessageError } from '../utilities/DebugUtilities';
//Model
import { IBuyerAddRequest } from '../model/Request/IBuyerAddRequest';
import { IBuyerAddResponse } from '../model/Response/IBuyerAddResponse';


const debug = debugLib('tc:BuyerDataSource');

export default class BuyerDataSource {

    public static readonly addBuyer = async (dataRequest : IBuyerAddRequest): Promise<IBuyerAddResponse> => {
        try {
            let usuario = dataRequest.usuario;
            let rangoBusqueda = dataRequest.rangoBusqueda;
          
            const rqUid = 'test';
            const result = await executeSQL(
                `INSERT INTO tr_data_base.comprador (com_usuario, com_rango_busqueda) VALUES ($usuario, $rangoBusqueda);`,
                QueryTypes.INSERT,
                {usuario,rangoBusqueda}
            );
            if (result) { 
                console.log("resultado",result);
                 const response = {
                    operationStatus: true,
                    operationCode: "0000",
                    operationMessage:"operacion exitosa",
                    idBuyer:result[0]
                };
                return Promise.resolve(response);
            } else {
                debug(`[%s] ${MessageError}`, rqUid, '404 tr_data_base'); // Ajustar el nombre de la base de datos
                const bodyErrorSearchConfigInfo = {
                    CodeError: 'add-buyer-404-DB',
                    Reason: 'BD error tr_data_base', // Ajustar el nombre de la base de datos
                    StatusCode: '404',
                };
                return Promise.reject(bodyErrorSearchConfigInfo);
            }

        } catch (err) {
            debug(`[%s] ${MessageError}`, err);
            return Promise.reject({ Code: 'add-buyer', Reason: err });
        }
    }
   }