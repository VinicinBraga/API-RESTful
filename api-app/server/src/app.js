const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/create", (req, res) => {
  const title = req.body.title;
  const name = req.body.name;
  console.log(`Title: ${title} and ${name}`);
  res.send(`Title: ${title} and ${name}`);
});

app.listen(3001, () => console.log(`Example app listening on port 3001!`));
