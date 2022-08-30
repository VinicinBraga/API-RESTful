const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/create", (req, res) => {
  const title = req.body.title;

  res.send(`Title: ${title}`);
});

app.listen(3001, () => console.log(`Example app listening on port 3001!`));
