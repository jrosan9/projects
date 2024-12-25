const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "not authenticated" });
  }

  jwt.verify(token, process.env.secret_key, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "invalid token" });
    }
    req.subscribers = user;
    next();
  });
};

module.exports = {
  authenticateToken,
};
