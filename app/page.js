"use client";

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyRebuildSection from './components/WhyRebuildSection';
import TestimonialSection from './components/TestimonialSection';
import TeamSection from './components/TeamSection';
import MapSection from './components/MapSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TeamSection />
      <AboutSection />
      <WhyRebuildSection />
      <TestimonialSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
}