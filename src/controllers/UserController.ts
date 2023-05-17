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
    '/User/getUser/:uid',
    RequestLogger.basic,
    async (req: Request, res: Response) => {
        try {
            const uid  = req.params.uid;
            const response =  await UserService.getUser(uid);
            res.status(HTTP_STATUS_CODES.OK).send(response);
        } catch (err) {
            const error = DebugUtilities.error(err, 'Error');
            debug('ERROR: Get-User: %j', error.statusError);
            res.status(error.codeStatusError).send(error.statusError);
        }
    }
);

//add User
UserController.post(
    '/User/addUser',
    RequestLogger.basic,
    async (req: Request, res: Response) => {
        try {
            const response =  await UserService.addUser(req.body);
            res.status(HTTP_STATUS_CODES.OK).send(response);
        } catch (err) {
            const error = DebugUtilities.error(err, 'Error');
            debug('ERROR: POST-CoeController: %j', error.statusError);
            res.status(error.codeStatusError).send(error.statusError);
        }
    }
);


//add User
UserController.post(
    '/User/updateToken',
    RequestLogger.basic,
    async (req: Request, res: Response) => {
        try {
            const response =  await UserService.updateToker(req.body);
            res.status(HTTP_STATUS_CODES.OK).send(response);
        } catch (err) {
            const error = DebugUtilities.error(err, 'Error');
            debug('ERROR: POST-CoeController: %j', error.statusError);
            res.status(error.codeStatusError).send(error.statusError);
        }
    }
);

export default UserController;
