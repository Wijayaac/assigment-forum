import React from "react";
import { useForm } from "react-hook-form";
import { saveComment } from "./AddCommentForm.handler";

const AddCommentForm = (props) => {
  const { id, setNewComment } = props;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    saveComment(id, data, setNewComment);
    reset();
  };

  return (
    <div>
      <form>
        <div className='field'>
          <label htmlFor='comment'>Add your comment</label>
          <input type='text' {...register("content")} />
        </div>
        <button onClick={handleSubmit(onSubmit)} type='button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;
