import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Nécessaire pour tester les routes
import Cards from "../Cards";

describe("Cards Component", () => {
  const mockCardsData = [
    {
      id: "1",
      cover: "https://example.com/image1.jpg",
      title: "Card 1",
    },
    {
      id: "2",
      cover: "https://example.com/image2.jpg",
      title: "Card 2",
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCardsData),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders the Cards component and displays data fetched from the API", async () => {
    render(
      <MemoryRouter>
        <Cards />
      </MemoryRouter>
    );

    // Utilisation de findByText pour gérer les éléments asynchrones
    const card1 = await screen.findByText("Card 1");
    const card2 = await screen.findByText("Card 2");

    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();

    // Vérifier que les images de fond des cartes sont correctes
    const cardBackgrounds = screen.getAllByRole("img", { hidden: true });
    expect(cardBackgrounds[0]).toHaveStyle(
      `background-image: url(${mockCardsData[0].cover})`
    );
    expect(cardBackgrounds[1]).toHaveStyle(
      `background-image: url(${mockCardsData[1].cover})`
    );
  });

  test("navigates to the correct route when a card is clicked", async () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Cards />
      </MemoryRouter>
    );

    const card1 = await screen.findByText("Card 1");
    card1.click();

    expect(mockNavigate).toHaveBeenCalledWith("/1");
  });

  test("displays an error message if the API call fails", async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error("API fetch failed"))
    );

    render(
      <MemoryRouter>
        <Cards />
      </MemoryRouter>
    );

    // Utilisation de findByText pour vérifier le message d'erreur
    const errorMessage = await screen.findByText(
      /Erreur lors de la récupération des données/i
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
