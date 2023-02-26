import debugLib from 'debug';
import { Request, Response, Router } from 'express';
import RequestLogger from '../utilities/RequestLogger';
import HTTP_STATUS_CODES from 'http-status';
import { DebugUtilities } from '../utilities/DebugUtilities';
//Services
import { UserService } from '../services/UserService';

const debug = debugLib('tc:UserController');
const UserController = Router();


UserController.get(
    '/User/getUser/:idUser',
    RequestLogger.basic,
    async (req: Request, res: Response) => {
        try {
            const idUser  = +req.params.idUser;
            console.log('idUser',idUser)
            const response =  await UserService.getUser(idUser);
            res.status(HTTP_STATUS_CODES.OK).send(response);
        } catch (err) {
            const error = DebugUtilities.error(err, 'Error');
            debug('ERROR: Get-User: %j', error.statusError);
            res.status(error.codeStatusError).send(error.statusError);
        }
    }
);


export default UserController;