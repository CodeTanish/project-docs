const jwt = require("jsonwebtoken");

module.exports.generateToken = (user) => {
  return jwt.sign(
    {
      email:user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};
