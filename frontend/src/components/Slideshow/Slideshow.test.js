import { render, screen, fireEvent } from "@testing-library/react";
import Slideshow from "./index.jsx";

const pictures = ["img1.jpg", "img2.jpg", "img3.jpg"];

describe("Slideshow component", () => {
  test("should display the first image initially", () => {
    render(<Slideshow pictures={pictures} />)
    const img = screen.getByAltText("Slide 1");
    expect(img).toHaveAttribute("src", "img1.jpg");
  });

  test("should go to the next slide on right arrow click", () => {
    render(<Slideshow pictures={pictures} />);
    const rightArrow = screen.getByRole("button", { name: /chevron-right/i });
    fireEvent.click(rightArrow);
    const img = screen.getByAltText("Slide 2");
    expect(img).toHaveAttribute("src", "img2.jpg");
  });

  test("should go to the previous slide on left arrow click", () => {
    render(<Slideshow pictures={pictures} />);
    const rightArrow = screen.getByRole("button", { name: /chevron-right/i });
    fireEvent.click(rightArrow);

    const leftArrow = screen.getByRole("button", { name: /chevron-left/i });
    fireEvent.click(leftArrow);

    const img = screen.getByAltText("Slide 1");
    expect(img).toHaveAttribute("src", "img1.jpg");
  });

  test("should loop back to the last image when clicking left on the first slide", () => {
    render(<Slideshow pictures={pictures} />);
    const leftArrow = screen.getByRole("button", { name: /chevron-left/i });
    fireEvent.click(leftArrow);
    const img = screen.getByAltText("Slide 3");
    expect(img).toHaveAttribute("src", "img3.jpg");
  });

  test("should loop back to the first image when clicking right on the last slide", () => {
    render(<Slideshow pictures={pictures} />);
    const rightArrow = screen.getByRole("button", { name: /chevron-right/i });
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);

    const img = screen.getByAltText("Slide 1");
    expect(img).toHaveAttribute("src", "img1.jpg");
  });
});
