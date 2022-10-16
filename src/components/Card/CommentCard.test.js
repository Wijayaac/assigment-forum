import { render, screen } from "@testing-library/react";

import CommentCard from "./CommentCard";

describe("CommentCard", () => {
  const props = {
    comment: {
      content: "Test Comment",
    },
  };
  describe("#render", () => {
    it("should render comment card when invoked", () => {
      render(<CommentCard {...props} />);
      const commentContent = screen.getByText(/Test Comment/);

      expect(commentContent).toBeInTheDocument();
    });
  });
});
