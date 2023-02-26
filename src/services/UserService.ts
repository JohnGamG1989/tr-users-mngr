import debugLib from 'debug';
import UserDataSource from '../datasource/UserDataSource';
//Model
import { IUserResponse } from '../model/Response/IUserResponse';

const debug = debugLib('tc:UserService');


export class UserService {

    public static async getUser(idUser : number): Promise<IUserResponse> {
     try {
        const response =  await UserDataSource.getUser(idUser);
        return Promise.resolve(response);
     } catch (err) {
        debug('Error trying to get user information %s ', err);
        return Promise.reject(err);
     }
    }    
}