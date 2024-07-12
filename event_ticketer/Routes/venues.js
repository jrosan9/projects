const express = require("express");
const venueRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

venueRouter.get("/", async (req, res) => {
  const venues = await prisma.venues.findMany();
  res.send(venues);
});

venueRouter.get("/:id", async (req, res) => {
  const venue = await prisma.venues.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      events: true,
      reviews: true,
    },
  });
  res.send(category);
});

module.exports = venueRouter;
