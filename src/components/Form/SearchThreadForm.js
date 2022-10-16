import React from "react";
import { useForm } from "react-hook-form";

import { getThreads } from "./SearchThreadForm.handler";
import style from "./SearchThreadForm.module.scss";

const SearchThreadForm = (props) => {
  const { register, handleSubmit } = useForm();
  const { setThreads, setIsLoading } = props;

  const searchSubmit = ({ title_like }) => {
    getThreads(title_like, setThreads, setIsLoading);
  };

  return (
    <div className={style.search}>
      <form onSubmit={handleSubmit(searchSubmit)}>
        <input
          type='text'
          {...register("title_like")}
          placeholder='Search Threads'
        />
      </form>
    </div>
  );
};

export default SearchThreadForm;
