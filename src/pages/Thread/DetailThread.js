import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../../components/Card";
import { AddCommentForm } from "../../components/Form";
import { getComments, getThread } from "./Thread.handler";

const DetailThread = () => {
  const { id } = useParams();

  const [thread, setThread] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newComment, setNewComment] = useState(0);

  // This will load once component rendered
  useEffect(() => {
    getThread(id, setThread, setIsLoading);
  }, [id]);

  // This updating when adding new comment
  useEffect(() => {
    getComments(id, setComments, setIsLoading);
  }, [newComment, id]);

  return (
    <div>
      {isLoading && <p>Loading</p>}
      <h1>{thread.title}</h1>
      {thread.created_at && <p className='thread-date'>{thread.created_at}</p>}
      {thread.description && (
        <div className='thread-description'>{thread.description}</div>
      )}
      <AddCommentForm id={id} setNewComment={setNewComment} />
      <h2>Replies</h2>
      {comments &&
        comments.map((comment, key) => (
          <div key={key}>
            <Comment comment={comment} />
          </div>
        ))}
    </div>
  );
};

export default DetailThread;
