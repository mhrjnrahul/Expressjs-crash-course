const express = require('express');

const app = express();

//setup static folder
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});