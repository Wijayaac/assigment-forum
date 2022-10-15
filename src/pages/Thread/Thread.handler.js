import axios from "axios";
import { API_URL } from "../../utils";

const getThreads = async (setThreads, setIsLoading) => {
  try {
    let { data } = await axios.get(`${API_URL}/threads`);
    setIsLoading(false);
    setThreads(data);
  } catch (error) {
    setThreads(null);
  }
};

const getThread = async (id, setThread, setIsLoading) => {
  try {
    let { data } = await axios.get(`${API_URL}/threads/${id}`);
    setIsLoading(false);
    setThread(data);
  } catch (error) {
    setThread(null);
  }
};

const getComments = async (id, setComments, setIsLoading) => {
  try {
    let { data } = await axios.get(`${API_URL}/comments?threadId=${id}`);
    setIsLoading(false);
    setComments(data);
  } catch (error) {
    setComments(null);
  }
};

export { getThreads, getThread, getComments };
