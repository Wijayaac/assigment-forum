import React from "react";
import { useForm } from "react-hook-form";
import { saveThread } from "./AddThreadForm.handler";

const AddThreadForm = () => {
  const { handleSubmit, reset, register } = useForm();

  const onSubmit = (data) => {
    saveThread(data);
  };
  return (
    <div>
      <form>
        <div className='field'>
          <label htmlFor='title'>Thread Title</label>
          <input type='text' {...register("title", { required: true })} />
        </div>
        <div className='field'>
          <label htmlFor='title'>Description</label>
          <textarea {...register("description")} />
        </div>
        <button onClick={handleSubmit(onSubmit)} type='button'>
          Create Thread
        </button>
      </form>
    </div>
  );
};

export default AddThreadForm;
