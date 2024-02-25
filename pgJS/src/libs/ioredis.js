const Redis = require("ioredis");

const redis = new Redis({
  host: "0.0.0.0",
  port: 6379,
});

module.exports = redis;
