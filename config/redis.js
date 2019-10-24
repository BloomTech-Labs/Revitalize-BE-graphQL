import bluebird from 'bluebird';
import redis from 'redis';
bluebird.promisifyAll(redis);

export default redis.createClient(process.env.REDIS_URL);
