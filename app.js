import express, { json } from "express";
import { connect } from "mongoose";
// import contactRouter from "./contact.js";
import contactRouter from "./src/contact.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(json());

// Allow all origins to access the server (for testing purposes)
app.use(cors());

// Connect to MongoDB using MONGODB_URL from .env
connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Use the contact router
app.use(contactRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
