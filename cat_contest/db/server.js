const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port = process.env.port || 3000;

app.use("/api/auth", require("../Routes/auth"));
app.use("/api/cats", require("../Routes/cats"));

app.use("/", express.static(__dirname + "/../client/dist"));
app.use("*", express.static(__dirname + "/../client/dist"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
