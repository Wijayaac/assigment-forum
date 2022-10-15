import React from "react";
import { NavLink } from "react-router-dom";

const ThreadCard = (props) => {
  const { thread } = props;
  return (
    <div>
      <p>{thread.title}</p>
      <p>Created : {thread.created_at}</p>
      <NavLink to={`/thread/${thread.id}`}>See Comments</NavLink>
    </div>
  );
};

export default ThreadCard;
