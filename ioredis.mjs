import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

const ping = await redis.ping();