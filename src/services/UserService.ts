import { IUserAddRequest } from '../model/Request/IUserAddRequest';
import { IUserAddResponse } from '../model/Response/IUserAddResponse';
//Model
import { IUserResponse } from '../model/Response/IUserResponse';
import UserDataSource from '../datasource/UserDataSource';
import debugLib from 'debug';

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
     public static async getOverwriteUser(dataRequest : IUserAddRequest): Promise<IUserAddResponse> {
      try {
         const response =  await UserDataSource.getOverwriteUser(
          dataRequest.nombre,
          dataRequest.apellido,
          dataRequest.telefonoCelular);
         return Promise.resolve(response);
      } catch (err) {
         debug('Error trying to obtain products types- %s ', err);
         return Promise.reject(err);
      }
     }
}



