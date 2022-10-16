import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { AddCommentForm } from ".";

import { saveComment } from "./AddCommentForm.handler";

jest.mock("./AddCommentForm.handler", () => ({
  saveComment: jest.fn(),
}));

describe("AddCommentForm", () => {
  const props = {
    id: 1,
    setNewComment: jest.fn(),
  };
  describe("#render", () => {
    it("should render Add Comment Form when invoked", () => {
      render(<AddCommentForm {...props} />);
      const contentInput = screen.getByRole("textbox", { name: "content" });

      expect(contentInput).toBeInTheDocument();
    });
  });
  describe("#submit", () => {
    it("should add new comment when form submitted", async () => {
      render(<AddCommentForm {...props} />);
      const contentInput = screen.getByRole("textbox", { name: "content" });
      const submitButton = screen.getByRole("button", {
        name: "commentButton",
      });
      const mockData = {
        content: "Test Comment",
      };

      await act(() => {
        fireEvent.change(contentInput, {
          target: {
            value: "Test Comment",
          },
        });
      });
      await act(() => {
        fireEvent.click(submitButton);
      });

      expect(saveComment).toBeCalledWith(1, mockData, props.setNewComment);
    });

    it("should show error message on field comment when form submitted", async () => {
      render(<AddCommentForm {...props} />);
      const submitButton = screen.getByRole("button", {
        name: "commentButton",
      });

      await act(() => {
        fireEvent.click(submitButton);
      });

      const errorComment = screen.getByText(/You must provide comment/);
      expect(errorComment).toBeInTheDocument();
    });
  });
});
