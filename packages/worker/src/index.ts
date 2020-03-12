import { queueWorker } from "./queue";
import throng from 'throng';
import { config } from "./config";
import { workerJob } from "./worker";
import { Database } from "./database";

throng({
    workers: config.workerCount,
    start: (idWorker) => {
        const database = new Database;
        console.log(`Started Falcon Worker ${idWorker}`);
        queueWorker.process(workerJob(database));
        return database.connect();
    }
})