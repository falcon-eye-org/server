import { Job } from "bull";
import { IJob } from "./Interface/IJob";
import { Database } from "./database";
import { UAParser } from 'ua-parser-js';
import { IParsedEvent } from "./Interface/IEvent";

export const workerJob = (database: Database) => {
    return async (job: Job<IJob>) => {
        const events = [];
        for (const event of job.data.events) {
            const device = new UAParser(event.userAgent);
            const parsedEvent: IParsedEvent = {
                ...event,
                browser: device.getBrowser(),
                device: device.getOS()
            };
            events.push(database.saveJobResult(parsedEvent))
        }
        return Promise.all(events);
    }
}