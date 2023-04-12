import debugLib from 'debug';
import { Request, Response, Router } from 'express';
import RequestLogger from '../utilities/RequestLogger';
import HTTP_STATUS_CODES from 'http-status';
import { DebugUtilities } from '../utilities/DebugUtilities';
//Services
import { BuyerService } from '../services/BuyerService';


const debug = debugLib('tc:BuyerController');
const BuyerController = Router();


//add Buyer
BuyerController.post(
    '/User/addBuyer',
    RequestLogger.basic,
    async (req: Request, res: Response) => {
        try {
            const response =  await BuyerService.addBuyer(req.body);
            res.status(HTTP_STATUS_CODES.OK).send(response);
        } catch (err) {
            const error = DebugUtilities.error(err, 'Error');
            debug('ERROR: POST-AddBuyer: %j', error.statusError);
            res.status(error.codeStatusError).send(error.statusError);
        }
    }
);


export default BuyerController;