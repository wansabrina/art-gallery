import { act, getByText, render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import '@testing-library/jest-dom'
import Achievements from '@/container/landing/Achievements'
import Testimonials from '@/container/landing/Testimonials'
import Features from '@/container/landing/Features'
import Download from '@/container/landing/Download'
import Hero from '@/container/landing/Hero'

describe('Home', () => {
  it("Should check the correct title", () => {
    act(() => {
      render(<Home/>)
    })
    const title = screen.findAllByTitle('FinanceKu')
    expect(title).toBeTruthy()
  })
  it("Should render the Hero Section", () => {
    act(() => {
      render(<Hero/>)
    })
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toBeInTheDocument()
  })
  it('Should render the Achievements Section', () => {
    act(() => {
      render(<Achievements/>)
    })
    const achievementsSection = screen.getByTestId('achievements-section')
    expect(achievementsSection).toBeInTheDocument()
  })
  it('Should render the Features Section', () => {
    act(() => {
      render(<Features/>)
    })
    const featuresSection = screen.getByTestId('features-section')
    expect(featuresSection).toBeInTheDocument()
  })
  it('Should render the Testimonials Section', () => {
    act(() => {
      render(<Testimonials/>)
    })
    const testimonialsSection = screen.getByTestId('testimonials-section')
    expect(testimonialsSection).toBeInTheDocument()
  })
  it('Should render the Download Section', () => {
    act(() => {
      render(<Download/>)
    })
    const downloadsSection = screen.getByTestId('download-section')
    expect(downloadsSection).toBeInTheDocument()
  })

  it("Should render the Home Page", () => {
    act(() => {
      render(<Home/>)
    })
    const homePage = screen.getByTestId('home');
    expect(homePage).toBeInTheDocument()
  })
})