import { IEvent } from "./IEvent";

export interface IHttpBody {
    client: string;
    events: Array<IEvent>;
    timestamp: string;
}

export type IJob = IHttpBody;