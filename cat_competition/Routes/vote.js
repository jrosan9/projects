const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const voteRouter = express();

const { authenticateToken, submitVote } = require("../middleware/utils");

voteRouter.get("/", async (req, res) => {
  res.send("Vote");
});

voteRouter.post("/", authenticateToken, submitVote, async (req, res) => {
  res.json({ message: "Submitted successfully" });
});

module.exports = voteRouter;
