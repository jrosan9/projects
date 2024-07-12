const express = require("express");
const authRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const { requireUser } = require("../middleware/utils");
const jwt = require("jsonwebtoken");

authRouter.get("/", (req, res) => {
  res.send("Auth Route");
});

authRouter.get("/me", requireUser, (req, res) => {
  if (!req.customer_Account) {
    return res.status(401).json({ error: "User not authenticated" });
  }
  res.status(200).json(req.customer_Account);
});

authRouter.post("/register", async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await prisma.customer_Account.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: hashPassword,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
      },
    });
    if (newUser) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: { id: newUser.id },
        },
        process.env.JWT_SECRET
      );
      res.send({ token: token });
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const foundUser = await prisma.customer_Account.findUnique({
      where: {
        username: username,
        email: email,
      },
    });
    if (!foundUser) {
      res.send({ message: "Invalid login Credentials" });
    } else {
      const correctPassword = await bcrypt.compare(
        password,
        foundUser.password
      );
      if (!correctPassword) {
        res.send({ message: "Invalid Login Credentials" });
      } else {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: { id: foundUser.id },
          },
          process.env.JWT_SECRET
        );
        res.send({ token: token });
      }
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = authRouter;
