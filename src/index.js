require("dotenv").config();

const express = require("express");
const webhook = require("../routes/webhook");

const app = express();

app.use(express.json());
app.use("/", webhook);

app.get("/", (req, res) => {
  res.send("ExpenseBot AI is running 🚀");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
