const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/tokenGenerators");

// dummy users
let users = [
  { id: 1, email: "yeasarabir@gmail.com", password: "hello123" },
  { id: 2, email: "samin@mail.com", password: "ketumi?" },
];

const loginService = async ({ email, password }) => {
  // to check
  console.log(email, password);

  // user validate
  const user = users.find((u) => {
    return u.email === email && u.password === password;
  });

  if (!user) {
    throw new Error("User not found!");
  }
  console.log(user);

  // session
  const nanoidModule = await import("nanoid");
  const session = nanoidModule.nanoid(26);
  console.log(session);

  // token generate
  const accessToken = generateAccessToken({ ...user, session: session });
  const refreshToken = generateRefreshToken({ ...user, session: session });

  // return tokens to login
  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

module.exports = loginService;
