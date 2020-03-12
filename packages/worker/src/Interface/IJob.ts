import { IEvent } from "./IEvent";

export interface IJob {
    client: string;
    events: Array<IEvent>;
    timestamp: string;
}

export interface IJobResult {
    name: string;
}
