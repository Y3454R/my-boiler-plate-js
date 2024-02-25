const { validateEmail, validatePassword } = require("../utils/validators");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/tokenGenerators");

let users = [
  { id: 1, email: "yeasar@gmail.com", password: "hello123" },
  { id: 2, email: "samin@mail.com", password: "ketumi?" },
];

const login = async (req, res) => {
  let { email, password } = req.body;
  console.log(email, password);

  // sanitize user inputs
  if (!(validateEmail(email) || validatePassword(password))) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // user validate
  const user = users.find((u) => {
    return u.email === email && u.password === password;
  });

  if (!user) {
    return res.status(401).json({ message: "User not found!" });
  }

  // session
  const nanoidModule = await import("nanoid");
  const session = nanoidModule.nanoid(26);

  // token generate
  const accessToken = generateAccessToken({ ...user, session: session });
  const refreshToken = generateRefreshToken({ ...user, session: session });

  // response
  return res.status(200).json({
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
};

module.exports = login;
