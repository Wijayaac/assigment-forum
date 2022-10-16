import axios from "axios";

import { getThreads, getThread, getComments } from "./Thread.handler";
import { API_URL } from "../../utils/index";

jest.mock("axios");

describe("#handler", () => {
  describe("getThreads", () => {
    it("should call axios.get when getThreads invoked", async () => {
      const mockSetThreads = jest.fn();
      const mockSetIsLoading = jest.fn();
      const data = [
        {
          id: 1,
          title: "ASK : How to sit properly ?",
          description: "nothing",
          created_at: "2020-12-7",
        },
      ];

      axios.get.mockResolvedValue({ data });
      await getThreads(mockSetThreads, mockSetIsLoading);

      expect(axios.get).toBeCalledWith(
        `${API_URL}/threads?_sort=id&_order=desc`
      );
      expect(mockSetThreads).toBeCalledWith(data);
      expect(mockSetIsLoading).toBeCalledWith(false);
    });
  });
  describe("getThread", () => {
    it("should call axios.get when getThread invoked", async () => {
      const mockSetThread = jest.fn();
      const mockSetIsLoading = jest.fn();
      const data = {
        id: 1,
        title: "ASK : How to sit properly ?",
        description: "nothing",
        created_at: "2020-12-7",
      };

      axios.get.mockResolvedValue({ data });
      await getThread(1, mockSetThread, mockSetIsLoading);

      expect(axios.get).toBeCalledWith(`${API_URL}/threads/1`);
      expect(mockSetThread).toBeCalledWith(data);
      expect(mockSetIsLoading).toBeCalledWith(false);
    });
  });
  describe("getComments", () => {
    it("should call axios.get when getComments invoked", async () => {
      const mockSetComments = jest.fn();
      const mockSetIsLoading = jest.fn();
      const data = [
        {
          id: 11,
          content: "Gini caranya",
          threadId: 1,
        },
      ];

      axios.get.mockResolvedValue({ data });
      await getComments(1, mockSetComments, mockSetIsLoading);

      expect(axios.get).toBeCalledWith(`${API_URL}/comments?threadId=1`);
      expect(mockSetComments).toBeCalledWith(data);
      expect(mockSetIsLoading).toBeCalledWith(false);
    });
  });
});
