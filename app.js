const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:8000",
      "http://localhost:4200",
      "https://localhost:8000",
      "https://localhost:4200",
    ],
  })
);

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection database is successful!");
  })
  .catch((err) => {
    console.log("Database connection failed. ERROR " + err);
  });

// Routes
const bookingsRouter = require("./routes/bookingRoutes");
app.use(`${process.env.URL}/bookings`, bookingsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
