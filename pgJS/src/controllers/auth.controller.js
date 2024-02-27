const { validateEmail, validatePassword } = require("../utils/validators");
const loginService = require("../services/auth.service");

const login = async (req, res) => {
  let { email, password } = req.body;
  console.log(email, password);

  // sanitize user inputs
  if (!(validateEmail(email) || validatePassword(password))) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // send to loginService
  try {
    const result = await loginService({ email, password });

    return res.status(200).json({
      ...result,
    });
  } catch (error) {
    return res.status(401).json({
      message: error?.message,
    });
  }
};

module.exports = login;
