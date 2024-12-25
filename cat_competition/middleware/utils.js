const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "not authenticated" });
  }

  jwt.verify(token, process.env.secret_keyyyy, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "invalid token" });
    }
    req.subscriber_id = user.id;
    next();
  });
};

const submitVote = async (req, res) => {
  const { catId } = req.body;
  const subscriberId = req.subscriber_id;

  if (!catId) {
    return res
      .status(400)
      .json({ error: "No cat was selected. catId is required." });
  }
  try {
    const existingVote = await prisma.vote.findUnique({
      where: {
        subscriberId_catId: {
          subscriberId,
          catId,
        },
      },
    });

    if (existingVote) {
      res.status(400).json({ error: "You have already voted!" });
    }

    await prisma.$transaction([
      prisma.vote.create({
        data: {
          subscriberId,
          catId,
        },
      }),
      prisma.cats.update({
        where: { id: catId },
        data: {
          voteCount: {
            increment: 1,
          },
        },
      }),
    ]);

    return res.status(200).json({ message: "Vote successfully submitted" });
  } catch (error) {
    console.error("Error submitting vote:", error);
    return res.status(500).json({ error: "Error submitting vote" });
  }
};

module.exports = {
  authenticateToken,
  submitVote,
};
