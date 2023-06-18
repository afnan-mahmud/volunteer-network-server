// External Imports
const jwt = require("jsonwebtoken");

const checkLogIn = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const decode = jwt.verify(token, "sdlfjasdjfasldfj");
    const { name, email } = decode;
    next();
  } catch {
    res.status(400).json({
      error: "Please Login again",
    });
  }
};

module.exports = checkLogIn;
