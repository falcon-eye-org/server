import Queue from 'bull';
import { config } from './config';
import { IJob } from './Interface/IJob';

export const queueWorker = new Queue<IJob>('simple-worker', config.redis);
