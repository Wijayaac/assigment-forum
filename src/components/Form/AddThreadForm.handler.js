import axios from "axios";
import { API_URL } from "../../utils";
const saveThread = async (data) => {
  try {
    let currentDate = new Date();
    let created_at = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    let res = await axios.post(`${API_URL}/threads`, {
      ...data,
      created_at,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export { saveThread };
