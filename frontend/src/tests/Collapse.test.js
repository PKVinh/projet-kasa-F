import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "../components/Collapse/index.jsx";

describe("Collapse Component", () => {
  test("renders with a title", () => {
    render(<Collapse title="Title">Some content</Collapse>);

    // Vérifie que le titre est bien affiché
    const title = screen.getByText("Title");
    expect(title).toBeInTheDocument();
  });

  test("toggles content visibility on click", () => {
    render(<Collapse title="Test Title">Some content</Collapse>);

    // Vérifie que le contenu est caché au départ
    const content = screen.getByText("Some content");
    expect(content).not.toHaveClass("openContent");

    // Récupère le header et clique dessus
    const header = screen.getByText("Test Title");
    fireEvent.click(header);

    // Vérifie que le contenu devient visible après le clic
    expect(content).toHaveClass("openContent");

    // Clique à nouveau pour refermer
    fireEvent.click(header);
    expect(content).not.toHaveClass("openContent");
  });
});
