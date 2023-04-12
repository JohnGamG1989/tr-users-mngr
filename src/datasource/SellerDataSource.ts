import debugLib from 'debug';
import { QueryTypes } from 'sequelize';
import { executeSQL } from '../database/database';
import { MessageError } from '../utilities/DebugUtilities';
//Model
import { ISellerAddRequest } from '../model/Request/ISellerAddRequest';
import { ISellerAddResponse } from '../model/Response/ISellerAddResponse';


const debug = debugLib('tc:SellerDataSource');

export default class SellerDataSource {

    public static readonly addSeller = async (dataRequest : ISellerAddRequest): Promise<ISellerAddResponse> => {
        try {
            let usuario = dataRequest.usuario;
            let direccion = dataRequest.direccion;
            let fotoIdentificacion = dataRequest.fotoIdentificacion;
          
            const rqUid = 'test';
            const result = await executeSQL(
                `INSERT INTO tr_data_base.vendedor (ven_usuario, ven_direccion,ven_fotoIdentificacion) VALUES ($usuario, $direccion, $fotoIdentificacion);`,
                
                QueryTypes.INSERT,
                {usuario,direccion,fotoIdentificacion}
            );
            if (result) { 
                console.log("resultado",result);
                 const response = {
                    operationStatus: true,
                    operationCode: "0000",
                    operationMessage:"operacion exitosa",
                    idSeller:result[0]
                };
                return Promise.resolve(response);
            } else {
                debug(`[%s] ${MessageError}`, rqUid, '404 tr_data_base'); // Ajustar el nombre de la base de datos
                const bodyErrorSearchConfigInfo = {
                    CodeError: 'add-seller-404-DB',
                    Reason: 'BD error tr_data_base', // Ajustar el nombre de la base de datos
                    StatusCode: '404',
                };
                return Promise.reject(bodyErrorSearchConfigInfo);
            }

        } catch (err) {
            debug(`[%s] ${MessageError}`, err);
            return Promise.reject({ Code: 'add-seller', Reason: err });
        }
    }
   }