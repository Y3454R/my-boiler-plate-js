const jwt = require("jsonwebtoken");

const accessTokenSecretKey = "mySecretKey";
const refreshTokenSecretKey = "myRefreshSecretKey";

const accessTokenTimeLimit = "10m";
const refreshTokenTimeLimit = "12hrs";

const generateAccessToken = (user) => {
  return jwt.sign(user, accessTokenSecretKey, {
    expiresIn: accessTokenTimeLimit,
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign(user, refreshTokenSecretKey, {
    expiresIn: refreshTokenTimeLimit,
  });
};

module.exports = { generateAccessToken, generateRefreshToken };
