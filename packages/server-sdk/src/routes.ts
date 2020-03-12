import { Request, Response } from "express";
import { queueWorker } from "./queue";


export const saveEvent = (req: Request, res: Response): void => {
    queueWorker.add(req.body)
    .then(() => {
        res.status(200).send("OK");
    })
    .catch(() => {
        /** @todo Log Error */
        res.sendStatus(500);
    });
};

export const notFound = (req: Request, res: Response): void => {
    res.sendStatus(404);
};
