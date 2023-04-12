import debugLib from 'debug';
import { Request, Response, Router } from 'express';
import RequestLogger from '../utilities/RequestLogger';
import HTTP_STATUS_CODES from 'http-status';
import { DebugUtilities } from '../utilities/DebugUtilities';
//Services
import { SellerService } from '../services/SellerService';


const debug = debugLib('tc:SellerController');
const SellerController = Router();


//add Seller
SellerController.post(
    '/User/addSeller',
    RequestLogger.basic,
    async (req: Request, res: Response) => {
        try {
            const response =  await SellerService.addSeller(req.body);
            res.status(HTTP_STATUS_CODES.OK).send(response);
        } catch (err) {
            const error = DebugUtilities.error(err, 'Error');
            debug('ERROR: POST-AddSeller: %j', error.statusError);
            res.status(error.codeStatusError).send(error.statusError);
        }
    }
);


export default SellerController;