import express from "express";
const router = express.Router();

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

//get all posts
router.get("/", (req, res) => {
  //limiter
  const limit = parseInt(req.query.limit) || posts.length;

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

//get a single post by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

export default router;