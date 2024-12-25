const express = require("express");
const catRouter = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const { authenticateToken } = require("../middleware/utils.js");

catRouter.get("/", async (req, res) => {
  const cats = await prisma.cats.findMany();
  res.status(200).send(cats);
});

catRouter.get("/:id", async (req, res) => {
  const cat = await prisma.cats.findMany({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.send(cat);
});

catRouter.post("/", async (req, res) => {
  try {
    const {
      name,
      description,
      img,
      phone_number,
      email,
      subscriber_name,
      subscriber_LastName,
      subscriber_number,
      subscriber_email,
      subscriber_PhoneNumber,
    } = req.body;
    const [new_cat, new_subscriber] = await Promise.all([
      prisma.cats.create({
        data: {
          name,
          description,
          img,
          phone_number,
          email,
        },
      }),
      prisma.subscribers.create({
        data: {
          subscriber_name,
          subscriber_LastName,
          subscriber_number,
          subscriber_email,
          subscriber_PhoneNumber,
        },
      }),
    ]);
    const token = jwt.sign(
      { id: new_subscriber.id, email: subscriber_email },
      process.env.secret_key,
      {
        expiresIn: "1hr",
      }
    );

    res.status(201).send({ cat: new_cat, subscriber: new_subscriber, token });
  } catch (error) {
    console.log("Error creating cat and subscriber", error);
    res.status(500).send({ error: "Failed to create cat and subscriber" });
  }
});

module.exports = catRouter;
