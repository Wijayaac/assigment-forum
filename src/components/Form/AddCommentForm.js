import React from "react";
import { useForm } from "react-hook-form";

import { saveComment } from "./AddCommentForm.handler";
import style from "./AddCommentForm.module.scss";

const AddCommentForm = (props) => {
  const { id, setNewComment } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    saveComment(id, data, setNewComment);
    reset();
  };

  return (
    <div className={style.comment}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={style.field}>
          <label htmlFor='comment'>Add your comment</label>
          <textarea
            type='text'
            aria-label='content'
            {...register("content", { required: "You must provide comment" })}
          />
          {errors.content && <span>{errors.content.message}</span>}
        </div>
        <button
          aria-label='commentButton'
          onClick={handleSubmit(onSubmit)}
          type='button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;
