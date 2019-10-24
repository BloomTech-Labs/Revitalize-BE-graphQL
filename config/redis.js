const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis);

export default redis.createClient(process.env.REDIS_URL);
