import debugLib from 'debug';
import UserDataSource from '../datasource/UserDataSource';
//Model
import { IUserResponse } from '../model/Response/IUserResponse';
import { IUserAddRequest } from '../model/Request/IUserAddRequest';
import { IUserAddResponse } from '../model/Response/IUserAddResponse';

const debug = debugLib('tc:UserService');


export class UserService {

    public static async getUser(uid : string): Promise<IUserResponse> {
     try {
        const response =  await UserDataSource.getUser(uid);
        return Promise.resolve(response);
     } catch (err) {
        debug('Error trying to get user information %s ', err);
        return Promise.reject(err);
     }
    }    

    public static async addUser(dataRequest : IUserAddRequest): Promise<IUserAddResponse> {
      try {
         const response =  await UserDataSource.addUser(dataRequest);
         return Promise.resolve(response);
      } catch (err) {
         debug('Error trying to insert user %s ', err);
         return Promise.reject(err);
      }
     }
}



