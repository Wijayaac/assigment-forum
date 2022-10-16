import axios from "axios";

import { API_URL } from "../../utils/index";

const getThreads = async (params, setThreads, setIsLoading) => {
  try {
    let { data } = await axios.get(
      `${API_URL}/threads?title_like=${params}&_sort=id&_order=desc`
    );
    setThreads(data);
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export { getThreads };
