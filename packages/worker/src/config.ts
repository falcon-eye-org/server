export const config = {
    redis: process.env.FALCON_REDIS || 'redis://redis:6379',
    mongo: process.env.FALCON_MONGO || 'mongodb://root:rootpassword@mongodb:27017',
    workerCount: process.env.FALCON_WORKER || 1
};
