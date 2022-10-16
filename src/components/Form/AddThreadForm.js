import React from "react";
import { useForm } from "react-hook-form";

import { saveThread } from "./AddThreadForm.handler";
import style from "./AddThreadForm.module.scss";

const AddThreadForm = () => {
  const { handleSubmit, reset, register } = useForm();

  const onSubmit = (data) => {
    saveThread(data);
    reset();
  };
  return (
    <div className={style.addThread}>
      <form>
        <div className={style.field}>
          <label htmlFor='title'>Thread Title</label>
          <input
            type='text'
            {...register("title", { required: true })}
            placeholder='Add topic you want to discuss'
          />
        </div>
        <div className={style.field}>
          <label htmlFor='title'>Description</label>
          <textarea
            {...register("description")}
            placeholder='Topic description, clarifying about the topic'
          />
        </div>
        <button onClick={handleSubmit(onSubmit)} type='button'>
          Create Thread
        </button>
      </form>
    </div>
  );
};

export default AddThreadForm;
