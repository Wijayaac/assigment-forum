import axios from "axios";

import { saveThread } from "./AddThreadForm.handler";
import { API_URL } from "../../utils/index";

jest.mock("axios");

describe("AddThreadFormHandler", () => {
  describe("saveData", () => {
    it("should call axios.post when saveData invoked", async () => {
      const currentDate = new Date();
      const sentData = {
        title: "Test Title",
        description: "Test Description",
      };
      const expectedData = {
        title: "Test Title",
        description: "Test Description",
        created_at: `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`,
      };

      await saveThread(sentData);

      expect(axios.post).toBeCalledWith(`${API_URL}/threads`, expectedData);
    });
  });
});
