import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  }, []);

  // This updating every adding new comment
  useEffect(() => {
    getComments(id, setComments, setIsLoading);
  }, [newComment]);

  return (
    <div>
      {isLoading && <p>Loading</p>}
      <p>{id}</p>
      <h1>{thread.title}</h1>
      {thread.description && (
        <div className='description'>{thread.description}</div>
      )}
      {comments &&
        comments.map((comment, key) => <div key={key}>{comment.content}</div>)}
      <AddCommentForm id={id} setNewComment={setNewComment} />
    </div>
  );
};

export default DetailThread;
