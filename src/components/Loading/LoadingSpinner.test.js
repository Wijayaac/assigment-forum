import { screen, render, getByRole } from "@testing-library/react";

import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  describe("#render", () => {
    it("should render Loading Spinner when invoked", () => {
      render(<LoadingSpinner />);
      const spinnerElm = screen.getByLabelText("spinner");

      expect(spinnerElm).toBeInTheDocument();
    });
  });
});
