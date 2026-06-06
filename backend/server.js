const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const emailRoutes = require("./routes/emailRoutes");

app.use("/api/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("Bulk Mail API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});