import React from "react";
import { useForm } from "react-hook-form";

import { saveComment } from "./AddCommentForm.handler";
import style from "./AddCommentForm.module.scss";

const AddCommentForm = (props) => {
  const { id, setNewComment } = props;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    saveComment(id, data, setNewComment);
    reset();
  };

  return (
    <div className={style.comment}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={style.field}>
          <label htmlFor='comment'>Add your comment</label>
          <textarea type='text' {...register("content")} />
        </div>
        <button onClick={handleSubmit(onSubmit)} type='button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;
