import axios from "axios";

import { saveComment } from "./AddCommentForm.handler";
import { API_URL } from "../../utils/index";

jest.mock("axios");

describe("AddCommentFormHandler", () => {
  describe("#saveComment", () => {
    it("should call axios.post when saveComment invoked", async () => {
      const mockId = 1;
      const mockContent = {
        content: "Test comment",
      };
      const mockSetNewComment = jest.fn();
      const data = {
        id: 1,
      };

      axios.post.mockResolvedValue({ data });
      await saveComment(mockId, mockContent, mockSetNewComment);

      expect(axios.post).toBeCalledWith(`${API_URL}/comments`, {
        ...mockContent,
        threadId: mockId,
      });
    });
  });
});
