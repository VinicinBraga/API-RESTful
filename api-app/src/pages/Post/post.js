import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";
import "./post.css";

function Post() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addPost = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Header />

      <main>
        <div className="card-post">
          <h1>Create Post</h1>
          <div className="line-post"></div>

          <div className="card-body-post">
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label>Title</label>
                <input type="text" name="title" {...register("title")} />
                <p className="error-message"></p>
              </div>

              <div className="fields">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  {...register("description")}
                />
                <p className="error-message"></p>
              </div>

              <div className="fields">
                <label>Content</label>
                <textarea
                  type="text"
                  name="content"
                  {...register("content")}
                ></textarea>
                <p className="error-message"></p>
              </div>

              <div className="btn-post">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Post;
