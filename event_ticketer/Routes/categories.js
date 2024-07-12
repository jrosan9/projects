const express = require("express");
const categoryRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

categoryRouter.get("/", async (req, res) => {
  const categories = await prisma.categories.findMany();
  res.send(categories);
});

categoryRouter.get("/:id", async (req, res) => {
  const category = await prisma.categories.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      events: true,
    },
  });
  res.send(category);
});

module.exports = categoryRouter;
