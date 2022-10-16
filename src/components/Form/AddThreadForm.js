import React from "react";
import { useForm } from "react-hook-form";

import { saveThread } from "./AddThreadForm.handler";
import style from "./AddThreadForm.module.scss";

const AddThreadForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

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
            {...register("title", { required: "You must add title thread" })}
            placeholder='Add topic you want to discuss'
            aria-label='title'
          />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div className={style.field}>
          <label htmlFor='title'>Description</label>
          <textarea
            {...register("description")}
            placeholder='Topic description, clarifying about the topic'
            aria-label='description'
          />
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          type='button'
          aria-label='createThread'>
          Create Thread
        </button>
      </form>
    </div>
  );
};

export default AddThreadForm;
