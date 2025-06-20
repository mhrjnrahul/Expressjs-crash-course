import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import { error } from "console";
import notFound from "./middleware/notFound.js";

const app = express();

//setup static folder
// app.use(express.static('public'));

//middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(logger); // custom logger middleware

//Routes
app.use("/api/posts", posts);


app.use(notFound); // 404 not found middleware
app.use(errorHandler); // custom error handler middleware

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
