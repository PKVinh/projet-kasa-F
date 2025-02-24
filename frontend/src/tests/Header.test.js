import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "../components/Header/index.jsx";

jest.mock("../styles/assets/LOGO-main.png", () => "mock-logo.png");

describe("Header component", () => {
  test("should display the logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByRole("img", { name: /kasa-logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "mock-logo.png");
  });

  test("should contain navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: /accueil/i });
    const aboutLink = screen.getByRole("link", { name: /a propos/i });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(aboutLink).toHaveAttribute("href", "/about");
  });
});
