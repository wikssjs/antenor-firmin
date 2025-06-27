"use client";

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyRebuildSection from './components/WhyRebuildSection';
import TestimonialSection from './components/TestimonialSection';
import DonationSection from './components/DonationSection';
import MapSection from './components/MapSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection donationGoal={15000000} currentDonations={0} />
      <AboutSection />
      <WhyRebuildSection />
      <TestimonialSection />
      <DonationSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
}