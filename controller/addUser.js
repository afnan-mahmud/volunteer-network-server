const User = require("../model/addUserModel");
const jwt = require("jsonwebtoken");

async function addUser(req, res, next) {
  let newUser;

  const user = await User.findOne({
    email: req.body.email,
  });

  if (user) {
    return res
      .status(400)
      .json({ error: "You are already registered, please login." });
  } else {
    newUser = new User({ ...req.body });
  }
  try {
    const result = await newUser.save();
    // generate token
    const token = jwt.sign(
      {
        name: newUser.name,
        email: newUser.email,
      },
      "sdlfjasdjfasldfj",
      {
        expiresIn: "10h",
      }
    );
    return res.status(200).json({
      access_token: token,
      message: "Account Registration Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function logInUser(req, res, next) {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    console.log(user);
    // generate token
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      "sdlfjasdjfasldfj",
      {
        expiresIn: "10h",
      }
    );

    if (user.role === "admin") {
      res.status(200).json({
        access_token: token,
        role: user.role,
        message: "Account Login Successfully",
      });
    } else {
      res.status(200).json({
        access_token: token,
        message: "Account Login Successfully",
      });
    }
  } else {
    res.status(500).json({ error: "Aunthentication Failed!" });
  }
}
module.exports = { addUser, logInUser };
