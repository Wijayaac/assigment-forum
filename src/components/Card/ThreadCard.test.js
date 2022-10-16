import { screen, render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import ThreadCard from "./ThreadCard";

describe("ThreadCard", () => {
  const props = {
    thread: {
      id: 1,
      title: "Test Thread",
      created_at: "2020-07-12",
    },
  };
  describe("#render", () => {
    it("should render Thread Card when invoked", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      render(
        <Router location={history.location} navigator={history}>
          <ThreadCard {...props} />
        </Router>
      );
      const titleThread = screen.getByText(/Test Thread/);
      const linkThread = screen.getByText(/See Comments/);
      const createdDateThread = screen.getByText(/Created : 2020-07-12/);

      expect(titleThread).toBeInTheDocument();
      expect(linkThread).toBeInTheDocument();
      expect(createdDateThread).toBeInTheDocument();
    });
  });
  describe("#navigation", () => {
    it("should navigate to thread detail when See Comment link clicked", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      render(
        <Router location={history.location} navigator={history}>
          <ThreadCard {...props} />
        </Router>
      );
      const linkThread = screen.getByText(/See Comments/);

      expect(history.location.pathname).toBe("/");
      fireEvent.click(linkThread);

      expect(history.location.pathname).toBe("/thread/1");
    });
  });
});
