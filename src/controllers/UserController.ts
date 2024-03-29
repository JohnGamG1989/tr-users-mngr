import { Request, Response, Router } from 'express';

import { DebugUtilities } from '../utilities/DebugUtilities';
import HTTP_STATUS_CODES from 'http-status';
import RequestLogger from '../utilities/RequestLogger';
//Services
import { UserService } from '../services/UserService';
import debugLib from 'debug';

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

<<<<<<< HEAD
UserController.put( // no es un get, es un put
    '/User/overwriteuser',
    RequestLogger.basic,
    async (req: Request, res: Response) => {
        try {
            const response = await UserService.getOverwriteUser(req.body);
            res.status(HTTP_STATUS_CODES.OK).send(response);
        } catch (err) {
            const error = DebugUtilities.error(err, 'Error');
            debug('ERROR: POST-ProductsController: %j', error.statusError);
=======

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
>>>>>>> 8308c5f4576bb53bc765f0620cccbc9850ef2fab
            res.status(error.codeStatusError).send(error.statusError);
        }
    }
);
<<<<<<< HEAD
export default UserController;
=======

export default UserController;
>>>>>>> 8308c5f4576bb53bc765f0620cccbc9850ef2fab
