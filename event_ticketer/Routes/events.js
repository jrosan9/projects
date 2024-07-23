const express = require("express");
const eventRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
eventRouter.get("/", async (req, res) => {
  const events = await prisma.events.findMany();
  res.send(events);
});
eventRouter.get("/trending", async (req, res) => {
  const trendingEvents = await prisma.events.findMany({
    where: {
      trending: true,
    },
  });
  res.send(trendingEvents);
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
eventRouter.get("/category/:id", async (req, res) => {
  const categoryEvents = await prisma.events.findMany({
    where: {
      category_id: parseInt(req.params.id),
    },
    include: {
      venue: true,
    },
  });
  res.send(categoryEvents);
});
eventRouter.get("/venue/:id", async (req, res) => {
  const venueEvents = await prisma.events.findMany({
    where: {
      venue_id: parseInt(req.params.id),
    },
    include: {
      venue: true,
    },
  });
  res.send(venueEvents);
});
module.exports = eventRouter;
