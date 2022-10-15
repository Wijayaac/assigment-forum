import axios from "axios";
import { API_URL } from "../../utils";

const saveComment = async (threadId, content, setNewComment) => {
  try {
    let { data } = await axios.post(`${API_URL}/comments`, {
      ...content,
      threadId,
    });
    setNewComment(data.id);
  } catch (error) {
    console.log(error);
  }
};

export { saveComment };
