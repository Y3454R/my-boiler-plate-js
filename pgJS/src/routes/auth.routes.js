const express = require("express");
const authRouter = express.Router();

const login = require("../controllers/auth.controllers");
const loginLimiter = require("../middlewares/limiter.middlewares");

authRouter.post("/", loginLimiter, login);
// authRouter.post("/", login);

module.exports = authRouter;
