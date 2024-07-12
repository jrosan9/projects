const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const requireUser = (req, res, next) => {
  if (!req.customer_Account) {
    return res.status(401).send({ error: "Not authenticated" });
  }
  next();
};

const parseToken = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return next(); // No token, continue to the next middleware
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.substring(7)
      : authHeader;

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.customer_Account.findUnique({
      where: {
        id: verifiedToken.data.id,
      },
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.customer_Account = user;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired" });
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
module.exports = {
  requireUser,
  parseToken,
};
