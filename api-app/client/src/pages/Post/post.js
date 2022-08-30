import React from "react";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./post.css";

const validation = yup.object().shape({
  title: yup
    .string()
    .required("*Required Field")
    .max(15, "*Maximum 15 characters"),
  description: yup
    .string()
    .required("*Required Field")
    .max(150, "*Maximum 150 characters"),
  content: yup
    .string()
    .required("*Required Field")
    .max(500, "*Maximum 500 characters"),
});

function Post() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

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
                <p className="error-message">{errors.title?.message}</p>
              </div>

              <div className="fields">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  {...register("description")}
                />
                <p className="error-message">{errors.description?.message}</p>
              </div>

              <div className="fields">
                <label>Content</label>
                <textarea
                  type="text"
                  name="content"
                  {...register("content")}
                ></textarea>
                <p className="error-message">{errors.content?.message}</p>
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
