const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //sending a html file | __dirname (current directory)
  res.status(200).sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
