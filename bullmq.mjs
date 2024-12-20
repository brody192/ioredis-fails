import { Queue } from "bullmq";

const redisURL = new URL(process.env.REDIS_URL);

const queue = new Queue("Queue", {
    connection: {
        // family: 0,
        host: redisURL.hostname,
        port: redisURL.port,
        username: redisURL.username,
        password: redisURL.password
    }
});

const jobs = await queue.getJobs();

console.log(jobs);