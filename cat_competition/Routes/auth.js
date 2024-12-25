const express = require("express");
const authRouter = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../middleware/utils");
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

authRouter.post("/register", async (req, res) => {
  try {
    const {
      subscriber_name,
      subscriber_LastName,
      subscriber_email,
      subscriber_PhoneNumber,
    } = req.body;

    const new_subscriber = await prisma.subscribers.create({
      data: {
        subscriber_name,
        subscriber_LastName,
        subscriber_email,
        subscriber_PhoneNumber,
      },
    });
    const token = jwt.sign(
      { id: new_subscriber.id },
      process.env.secret_keyyyy,
      {
        expiresIn: "1hr",
      }
    );
    res.status(201).json({
      user: new_subscriber,
      token,
      message: "Subscriber created successfully",
    });
  } catch (error) {
    console.log("Error creating subscriber", error);
    res.status(500).json({ message: error });
  }
});
authRouter.post("/login", async (req, res) => {
  const { subscriber_email } = req.body;
  if (!subscriber_email) {
    return res.status(400).json({ message: "Email is required" });
  }
  try {
    const foundSubscriber = await prisma.subscribers.findUnique({
      where: {
        subscriber_email,
      },
    });

    if (!foundSubscriber) {
      res.send({ message: "No account associated with that email" });
    }
    const token = jwt.sign(
      { id: foundSubscriber.id, email: subscriber_email },
      process.env.secret_keyyyy,
      {
        expiresIn: "1hr",
      }
    );

    res.status(200).json({
      message: "Login successful",
      user: foundSubscriber,
      token,
    });
  } catch (err) {
    throw err;
  }
});

module.exports = authRouter;
