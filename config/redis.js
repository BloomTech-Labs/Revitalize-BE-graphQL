import redis from 'redis';

const bluebird = require('bluebird');
bluebird.promisifyAll(redis);

export default redis.createClient(process.env.REDIS_URL);
