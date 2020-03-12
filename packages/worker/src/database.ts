import { MongoClient, Db } from 'mongodb';
import { IJobResult } from './Interface/IJob';
import { config } from './config';
import { IParsedEvent } from './Interface/IEvent';


export class Database {

    private client: MongoClient;
    private url: string;
    private db: Db;

    constructor() {
        this.url = config.mongo;
        this.client = new MongoClient(this.url);
    }

    public connect(): Promise<unknown> {
        return this.client.connect()
        .then(() => {
            this.db = this.client.db('FalconEye');
            this.db.collection('Events');
            return Promise.resolve();
        })
    }

    public saveJobResult(event: IParsedEvent) {
        return this.db.collection('Events').insertOne(event);
    }

}
