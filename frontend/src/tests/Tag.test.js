import { render, screen } from "@testing-library/react";
import Tag from "../components/Tag/index.jsx";

describe("Tag component", () => {
    test("should display the correct text", () => {
      render(<Tag text="Test Tag" />);
      
      const tagElement = screen.getByText(/test tag/i);
      expect(tagElement).toBeInTheDocument();
    });
});
