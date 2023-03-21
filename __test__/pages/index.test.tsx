import Index from "@/pages/index";
import "@testing-library/jest-dom";
import { render, waitFor, act } from "@testing-library/react";
import { findByTestId } from "@testing-library/dom";
import Collection from "@/components/Collection";

jest.mock('@/components/Collection', () => () => <div data-testid="collection-mock" />);
jest.mock('@/components/CollectionSlider', () => () => <div data-testid="collection-slider-mock" />);

test('renders Hero-section correctly', async () => {
    const { findByTestId } = render(<Index />);
    const heroSection = await findByTestId('hero-section');
    expect(heroSection).toBeInTheDocument();
});

test('renders Navbar correctly', async () => {
    const { findByTestId } = render(<Index />);
    const navbar = await findByTestId('navbar');
    expect(navbar).toBeInTheDocument();
});

test('renders Footer correctly', async () => {
    const { findByTestId } = render(<Index />);
    const footer = await findByTestId('footer');
    expect(footer).toBeInTheDocument();
});