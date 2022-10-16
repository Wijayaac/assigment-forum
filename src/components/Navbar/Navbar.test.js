import { screen, render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import Navbar from "./Navbar";

describe("Navbar", () => {
  describe("#render", () => {
    it("should render Navbar when invoked", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      render(
        <Router location={history.location} navigator={history}>
          <Navbar />
        </Router>
      );
      const threadLink = screen.getByText(/Threads/);
      const addThreadLink = screen.getByText(/Add Thread/);

      expect(threadLink).toBeInTheDocument();
      expect(addThreadLink).toBeInTheDocument();
    });
  });
  describe("#navigate", () => {
    it("should navigate to thread page when Threads navigation link clicked", () => {
      const history = createMemoryHistory({ initialEntries: ["/add-thread"] });
      render(
        <Router location={history.location} navigator={history}>
          <Navbar />
        </Router>
      );
      const threadLink = screen.getByText(/Threads/);

      expect(history.location.pathname).toBe("/add-thread");
      fireEvent.click(threadLink);

      expect(history.location.pathname).toBe("/");
    });
    it("should navigate to add thread page when Add Thread navigation link clicked", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      render(
        <Router location={history.location} navigator={history}>
          <Navbar />
        </Router>
      );
      const addThreadLink = screen.getByText(/Add Thread/);

      expect(history.location.pathname).toBe("/");
      fireEvent.click(addThreadLink);

      expect(history.location.pathname).toBe("/add-thread");
    });
  });
});
