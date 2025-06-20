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
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if(!post) {
    const error = new Error("Post not found");
    error.status = 404;
    return next(error);
  }

  res.json(post);
});

//create a new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ error: "Title is required" });
  }

  posts.push(newPost);
  res.status(201).json(newPost);
});

//update post by id
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
  return res.status(404).json({ error: "Post not found" });
}

post.title = req.body.title || post.title;
res.status(200).json(post);
});

//delete post by id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  posts.splice(index, 1);
  res.status(204).send();
});


export default router;
