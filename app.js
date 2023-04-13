import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Routes from "./routes/routes.js";
import cors from "cors";

import connection from "./dataBase/db.js";
const app = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

// connecting database
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

// Starting the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
