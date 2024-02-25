const router = require("express").Router();
const authRouter = require("./auth.routes");

// router.use("/auth", authRouter);
router.use("/login", authRouter);

module.exports = router;
