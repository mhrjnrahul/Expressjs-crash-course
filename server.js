const express = require("express");

const app = express();

const posts = [
  {
    id: 1,
    title: "First Post",
  },
  {
    id: 2,
    title: "Second Post",
  },
  {
    id: 3,
    title: "Third Post",
  },
];

//setup static folder
// app.use(express.static('public'));

//get all posts
app.get("/api/posts", (req, res) => {
  //limiter
  const limit = parseInt(req.query.limit) || posts.length;

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

//get a single post by id
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
