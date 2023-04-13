import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/router.js";

const app = express();

// middleware
app.use(express.json());
dotenv.config();
app.use(cors());

app.use("/", router);

// connecting with database
const URL = process.env.DB_URI;

const connection = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

// starting the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`server started at PORT ${PORT}`);
});

connection(URL);
