import debugLib from 'debug';
//model
import { IBuyerAddRequest } from '../model/Request/IBuyerAddRequest';
import { IBuyerAddResponse } from '../model/Response/IBuyerAddResponse';
//data Source
import BuyerDataSource from '../datasource/BuyerDataSource';

const debug = debugLib('tc:BuyerService');


export class BuyerService {

    public static async addBuyer(dataRequest : IBuyerAddRequest): Promise<IBuyerAddResponse> {
      try {
         const response =  await BuyerDataSource.addBuyer(dataRequest);
         return Promise.resolve(response);
      } catch (err) {
         debug('Error trying to insert Buyer %s ', err);
         return Promise.reject(err);
      }
     }
}



