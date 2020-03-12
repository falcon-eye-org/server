import { Request, Response, NextFunction } from 'express';
import { IHttpBody } from './Interface/IHttpBody';
import { config } from './config';


export const authorisationValidator = (req: Request, res: Response, next: NextFunction): void => {
    const body: IHttpBody = req.body;
    if (!body.client || body.client !== config.apiKey) {
        res.sendStatus(403);
        return;
    }
    next();
}

export const fieldValidator = (req: Request, res: Response, next: NextFunction): void => {
    const body: IHttpBody = req.body;
    if (!body.events || !body.timestamp) {
        res.sendStatus(400);
        return;
    }
    next();
}
