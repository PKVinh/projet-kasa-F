import { render, screen, fireEvent } from '@testing-library/react';
import Slideshow from './index'; 

describe('Slideshow Component', () => {
  const mockImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  test('renders fallback message when no images are provided', () => {
    render(<Slideshow imageSrc={[]} />);
    expect(screen.getByText(/Aucune image disponible/i)).toBeInTheDocument();
  });

  test('renders the first image by default', () => {
    render(<Slideshow imageSrc={mockImages} />);
    const imgElement = screen.getByAltText('Slide 1');
    expect(imgElement).toHaveAttribute('src', mockImages[0]);
  });

  test('displays pagination correctly', () => {
    render(<Slideshow imageSrc={mockImages} />);
    const pagination = screen.getByText(/1 \/ 3/i); // Vérifie la pagination au début
    expect(pagination).toBeInTheDocument();
  });

  test('updates currentIndex when clicking the next button', () => {
    render(<Slideshow imageSrc={mockImages} />);
    const nextButton = screen.getByRole('button', { name: /chevron-right/i });

    fireEvent.click(nextButton);

    const imgElement = screen.getByAltText('Slide 2');
    expect(imgElement).toHaveAttribute('src', mockImages[1]);

    const pagination = screen.getByText(/2 \/ 3/i); // Vérifie la mise à jour de la pagination
    expect(pagination).toBeInTheDocument();
  });

  test('updates currentIndex when clicking the previous button', () => {
    render(<Slideshow imageSrc={mockImages} />);
    const prevButton = screen.getByRole('button', { name: /chevron-left/i });

    // Simuler un clic pour revenir à la dernière image (car currentIndex commence à 0)
    fireEvent.click(prevButton);

    const imgElement = screen.getByAltText('Slide 3');
    expect(imgElement).toHaveAttribute('src', mockImages[2]);

    const pagination = screen.getByText(/3 \/ 3/i); // Vérifie la mise à jour de la pagination
    expect(pagination).toBeInTheDocument();
  });

  test('loops to the first image when clicking next on the last image', () => {
    render(<Slideshow imageSrc={mockImages} />);
    const nextButton = screen.getByRole('button', { name: /chevron-right/i });

    // Simuler des clics pour atteindre la dernière image
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    const imgElement = screen.getByAltText('Slide 1');
    expect(imgElement).toHaveAttribute('src', mockImages[0]);

    const pagination = screen.getByText(/1 \/ 3/i); // Vérifie la boucle
    expect(pagination).toBeInTheDocument();
  });

  test('loops to the last image when clicking previous on the first image', () => {
    render(<Slideshow imageSrc={mockImages} />);
    const prevButton = screen.getByRole('button', { name: /chevron-left/i });

    fireEvent.click(prevButton);

    const imgElement = screen.getByAltText('Slide 3');
    expect(imgElement).toHaveAttribute('src', mockImages[2]);

    const pagination = screen.getByText(/3 \/ 3/i); // Vérifie la boucle
    expect(pagination).toBeInTheDocument();
  });
});
