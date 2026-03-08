"use client";

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyRebuildSection from './components/WhyRebuildSection';
import TestimonialSection from './components/TestimonialSection';
import TeamSection from './components/TeamSection';
import MapSection from './components/MapSection';
import ContactSection from './components/ContactSection';
import StripeCheckout from './components/StripeCheckout';
import Footer from './components/Footer';
import { DonationProvider } from './context/DonationContext';

export default function Home() {
  return (
    <DonationProvider>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <TeamSection />
        <AboutSection />
        <WhyRebuildSection />
        <TestimonialSection />
        <MapSection />
        <StripeCheckout />
        <ContactSection />
        <Footer />
      </div>
    </DonationProvider>
  );
}