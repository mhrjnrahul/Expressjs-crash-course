import express from "express";
import path from "path";
import posts from "./routes/posts.js";

const app = express();

//setup static folder
// app.use(express.static('public'));

//Routes
app.use("/api/posts", posts);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
