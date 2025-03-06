const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token;

  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
     }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

     const decoded = jwt.verify(token, process.env.JWT_SECRET);

     req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "Not authorized, user not found" });
    }

    next(); 
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Not authorized, token invalid" });
  }
};

 const checkRole = (roles) => {
  return (req, res, next) => {
    try {
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({
          message: `Not authorized, ${roles.join(" or ")} role required`,
        });
      }
      next();
     } catch (error) {
      console.error(error);
      return res.status(403).json({ message: "Role check failed" });
    }
  };
};

module.exports = {
  protect,
  checkRole,
};
