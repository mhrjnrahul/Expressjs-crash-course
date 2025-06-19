const express = require("express");

const app = express();

const posts = require("./routes/posts");



//setup static folder
// app.use(express.static('public'));

//Routes
app.use('/api/posts', posts);


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
