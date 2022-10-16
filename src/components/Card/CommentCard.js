import React from "react";
import Person from "../../icons/Person";

import style from "./CommentCard.module.scss";
const CommentCard = (props) => {
  const { comment } = props;
  return (
    <div className={style.comment}>
      <span>
        <Person />
      </span>
      <p>{comment.content}</p>
    </div>
  );
};

export default CommentCard;
