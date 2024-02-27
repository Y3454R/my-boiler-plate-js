const redis = require("../libs/ioredis");
const { RateLimiterRedis } = require("rate-limiter-flexible");

const loginLimiter = async (req, res, next) => {
  const options = {
    storeClient: redis,
    keyPrefix: "limiter-",
    points: 10,
    duration: 10 * 60,
  };

  const key = req.ip || "";

  if (!key) {
    return res.status(400).json();
  }

  const limiter = new RateLimiterRedis(options);

  try {
    await limiter.consume(key, 2);
  } catch (err) {
    return res.status(426).json();
  }

  next();
};

module.exports = loginLimiter;
