import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { AddThreadForm } from ".";
import { saveThread } from "./AddThreadForm.handler";

jest.mock("./AddThreadForm.handler", () => ({
  saveThread: jest.fn(),
}));

describe("AddThreadForm", () => {
  describe("#render", () => {
    it("should render Add Thread Form when invoked", () => {
      render(<AddThreadForm />);
      const titleInput = screen.getByRole("textbox", { name: "title" });
      const descriptionInput = screen.getByRole("textbox", {
        name: "description",
      });
      const buttonSubmit = screen.getByRole("button", { name: "createThread" });

      expect(titleInput).toBeInTheDocument();
      expect(descriptionInput).toBeInTheDocument();
      expect(buttonSubmit).toBeInTheDocument();
    });
  });
  describe("#submit", () => {
    it("should trigger onSubmit function when form submitted", async () => {
      render(<AddThreadForm />);
      const titleInput = screen.getByRole("textbox", { name: "title" });
      const descriptionInput = screen.getByRole("textbox", {
        name: "description",
      });
      const buttonSubmit = screen.getByRole("button", { name: "createThread" });
      const mockData = {
        title: "Test Title",
        description: "Test Description",
      };

      await act(() => {
        fireEvent.change(titleInput, {
          target: {
            value: "Test Title",
          },
        });

        fireEvent.change(descriptionInput, {
          target: {
            value: "Test Description",
          },
        });
      });
      await act(() => {
        fireEvent.click(buttonSubmit);
      });

      expect(saveThread).toBeCalledWith(mockData);
    });
    it("should show error message on title field when form submitted", async () => {
      render(<AddThreadForm />);
      const buttonSubmit = screen.getByRole("button", { name: "createThread" });

      await act(() => {
        fireEvent.click(buttonSubmit);
      });

      const errorMessage = screen.getByText(/You must add title thread/);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
