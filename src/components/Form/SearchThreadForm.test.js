import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import SearchThreadForm from "./SearchThreadForm";

import { getThreads } from "./SearchThreadForm.handler";

jest.mock("./SearchThreadForm.handler.js", () => ({
  getThreads: jest.fn(),
}));

describe("SearchThreadForm", () => {
  const props = {
    setThreads: jest.fn(),
    setIsLoading: jest.fn(),
  };
  describe("#render", () => {
    it("should render Search Form when invoked", () => {
      render(<SearchThreadForm {...props} />);
      const searchInput = screen.getByRole("textbox", { name: "search" });

      expect(searchInput).toBeInTheDocument();
    });
  });
  describe("#search submit", () => {
    it("should call getThreads when search form submitted", async () => {
      render(<SearchThreadForm {...props} />);
      const searchInput = screen.getByRole("textbox", { name: "search" });
      const searchForm = screen.getByRole("form", { name: "formSearch" });

      await act(() => {
        fireEvent.change(searchInput, {
          target: {
            value: "Test search",
          },
        });
      });

      await act(() => {
        fireEvent.submit(searchForm);
      });

      expect(getThreads).toBeCalledWith(
        "Test search",
        props.setThreads,
        props.setIsLoading
      );
    });
  });
});
