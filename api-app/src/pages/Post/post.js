import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";

function Post() {
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();

  return (
    <div>
      <Header />
    </div>
  );
}

export default Post;
