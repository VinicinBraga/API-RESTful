const express = require("express");
const app = express();
app.use(express.json());

const PostModel = require("./models/Posts");

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/create_post", async (req, res) => {
  try {
    const { title, description, content } = req.body;
    const post = await PostModel.create({ title, description, content });
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/list_posts", async (req, res) => {
  try {
    const posts = await PostModel.find({});
    console.log(posts);
    res.send({ posts });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/show_posts/:post_id", async (req, res) => {
  try {
    const postId = req.params.post_id;

    const post = await PostModel.findById(postId);
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3001, () => console.log(`Example app listening on port 3001!`));
