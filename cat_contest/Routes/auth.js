const express = require("express");
const authRouter = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
authRouter.get("/", (req, res) => {
  res.send("Auth ");
});

authRouter.get("/me", (req, res) => {
  if (!req.subscriber) {
    return res.status(401).json({ error: "Not Authenticated" });
  } else {
    res.status(200).json(req.subscriber);
  }
});

module.exports = authRouter;
