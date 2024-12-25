const express = require("express");
const catRouter = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const runtimeConfig = {
  region: "us-east-1",
};

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 20 * 1024 * 1024,
  },
});

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Use your AWS access key from environment variables
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Use your AWS secret key
  },
});

const CAT_BUCKET = "wdjus-cat-images";

async function uploadFilesToS3(file) {
  const params = {
    Bucket: CAT_BUCKET,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const command = new PutObjectCommand(params);
    const data = await s3.send(command);
    console.log("Upload successful:", data);
    return `https://${params.Bucket}.s3.${runtimeConfig.region}.amazonaws.com/${params.Key}`;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw new Error("Failed to upload file");
  }
}

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

catRouter.post("/", upload.single("image"), async (req, res) => {
  console.log(req.file);
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imgUrl = await uploadFilesToS3(req.file);

    const {
      name,
      description,
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
    const new_cat = await prisma.cats.create({
      data: {
        name,
        description,
        img: imgUrl,
        subscriber_id: new_subscriber.id,
      },
    });

    const token = jwt.sign(
      { id: new_subscriber.id, email: subscriber_email },
      process.env.secret_keyyyy,
      {
        expiresIn: "1hr",
      }
    );

    res.status(201).json({
      cat: new_cat,
      user: new_subscriber,
      token,
      message: "Cat and subscriber created successfully",
      imgUrl,
    });
  } catch (error) {
    console.log("Error creating cat and subscriber", error);
    res.status(500).send({ error: "Failed to create cat and subscriber" });
    // return res.status(400).send("No image uploaded to s3");
  }
});

module.exports = catRouter;
