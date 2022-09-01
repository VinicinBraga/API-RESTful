const express = require("express");
const app = express();
app.use(express.json());

const PostModel = require("./models/Posts");

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/create", (req, res) => {
  const title = req.body.title;
  res.send(`Title: ${title}`);
});

app.post("/create_post", async (req, res) => {
  const { title, description, content } = req.body;
  const post = await PostModel.create({ title, description, content });
  res.send(post);
});

app.listen(3001, () => console.log(`Example app listening on port 3001!`));
