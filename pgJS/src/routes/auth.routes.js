const express = require("express");
const authRouter = express.Router();

const login = require("../controllers/auth.controller");
const loginLimiter = require("../middlewares/limiter.middleware");

authRouter.post("/", loginLimiter, login);

module.exports = authRouter;
