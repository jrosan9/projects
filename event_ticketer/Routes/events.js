const express = require("express");
const eventRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
eventRouter.get("/", async (req, res) => {
  const events = await prisma.events.findMany();
  res.send(events);
});

eventRouter.get("/:id", async (req, res) => {
  const event = await prisma.events.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      venue: true,
    },
  });
  res.send(event);
});

module.exports = eventRouter;
