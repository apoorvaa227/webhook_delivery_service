const Queue = require('bull');
const { redisConfig } = require('../config');

const webhookQueue = new Queue('webhook delivery', {
  redis: redisConfig,
  defaultJobOptions: {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 10000 // 10 seconds initial delay
    }
  }
});

module.exports = webhookQueue;