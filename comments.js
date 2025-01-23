// create web server
const express = require('express');
const app = express();
const port = 3000;

// add comments
app.post('/comments', (req, res) => {
  res.send('Comment added!');
});

// listen to port 3000
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
