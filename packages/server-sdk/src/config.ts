export const config = {
    apiKey: process.env.FALCON_API_KEY || 'qwerty',
    port: process.env.FALCON_PORT || 3000,
    redis: process.env.FALCON_REDIS || 'redis://redis:6379'
};
