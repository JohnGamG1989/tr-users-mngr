import debugLib from 'debug';
//model
import { ISellerAddRequest } from '../model/Request/ISellerAddRequest';
import { ISellerAddResponse } from '../model/Response/ISellerAddResponse';
//data Source
import SellerDataSource from '../datasource/SellerDataSource';

const debug = debugLib('tc:SellerService');


export class SellerService {

    public static async addSeller(dataRequest : ISellerAddRequest): Promise<ISellerAddResponse> {
      try {
         const response =  await SellerDataSource.addSeller(dataRequest);
         return Promise.resolve(response);
      } catch (err) {
         debug('Error trying to insert Seller %s ', err);
         return Promise.reject(err);
      }
     }
}



