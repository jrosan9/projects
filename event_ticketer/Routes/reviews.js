const express = require("express");
const reviewsRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const { requireUser, parseToken } = require("../middleware/utils");
const prisma = new PrismaClient();

reviewsRouter.get("/", async (req, res) => {
  const reviews = await prisma.reviews.findMany();
  res.send(reviews);
});

reviewsRouter.get("/venue/:id", async (req, res) => {
  const venue_reviews = await prisma.reviews.findMany({
    where: {
      venue_id: parseInt(req.params.id),
    },
  });
  res.send(venue_reviews);
});
reviewsRouter.get("/customer/:id", async (req, res) => {
  const customer_reviews = await prisma.reviews.findMany({
    where: {
      customer_id: parseInt(req.params.id),
    },
  });
  res.send(customer_reviews);
});
reviewsRouter.post("/", requireUser, async (req, res) => {
  const review = await prisma.reviews.create({
    data: {
      venue_id: req.body.venue_id,
      customer_id: req.body.customer_id,
      description: req.body.description,
      Rating: req.body.Rating,
    },
  });
  res.send(review);
});

module.exports = reviewsRouter;
