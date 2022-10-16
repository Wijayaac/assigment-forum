import React from "react";
import { NavLink } from "react-router-dom";

import style from "./ThreadCard.module.scss";

const ThreadCard = (props) => {
  const { thread } = props;
  return (
    <div className={style.card}>
      <div className={style.detail}>
        <p className={style.title}>{thread.title}</p>
        {thread.created_at && (
          <p className={style.date}>Created : {thread.created_at}</p>
        )}
      </div>
      <NavLink to={`/thread/${thread.id}`}>See Comments</NavLink>
    </div>
  );
};

export default ThreadCard;
