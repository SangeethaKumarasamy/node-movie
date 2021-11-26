import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import {movieRouter} from "./router/movie.js";

//process.env
dotenv.config();
console.log(process.env);
//const express = require("express");
const app = express();
app.use(express.json());
const PORT = 7000;

//const MONGO_URL = "mongodb://localhost";
const MONGO_URL =process.env.MONGO_URL;
//mongodb+srv://sangeetha:<password>@cluster0.kl6wa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
export async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb connected!!");
  return client;
  // console.log(movie);
}
 const client = await createConnection();

app.get("/", (request, response) => {
  response.send("Hello, world ❣ !!");
});

app.use("/movies",movieRouter)

app.listen(PORT, () => console.log("the server is started in ", PORT));
export{client};
