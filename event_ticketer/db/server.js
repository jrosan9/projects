const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { parseToken } = require("../middleware/utils.js");
const port = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(parseToken);
app.use("/api/events", require("../Routes/events"));
app.use("/api/categories", require("../Routes/categories"));
app.use("/api/venues", require("../Routes/venues"));
app.use("/api/auth", require("../Routes/auth"));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
