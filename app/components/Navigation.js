"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white text-blue-900 shadow-md py-3" 
          : "bg-transparent text-white py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo avec drapeau haïtien */}
          <Link href="/" className="flex items-center space-x-3">
            {/* Drapeau d'Haïti en SVG */}
            <div className="w-10 h-6 relative shadow-sm overflow-hidden">
              <svg viewBox="0 0 10 6" className="absolute inset-0 w-full h-full">
                {/* Moitié supérieure bleue */}
                <rect width="10" height="3" fill="#00209F" />
                {/* Moitié inférieure rouge */}
                <rect y="3" width="10" height="3" fill="#D21034" />
                {/* Emblème central blanc */}
                <g transform="translate(3.5, 1.5)">
                  <rect width="3" height="3" fill="white" />
                  <g transform="translate(0.75, 0.75)" fill="#00209F">
                    <circle cx="0.75" cy="0.75" r="0.5" />
                    <polygon points="0.75,0 1.5,1.5 0,1.5" />
                  </g>
                </g>
              </svg>
            </div>
            <span className="text-2xl font-bold text-indigo-900">École Anténor Firmin</span>
          </Link>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#about" 
              className={`hover:text-red-400 transition ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
            >
              À propos
            </Link>
            <Link 
              href="#pourquoi" 
              className={`hover:text-red-400 transition ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
            >
              Pourquoi
            </Link>
            <Link 
              href="#temoignages" 
              className={`hover:text-red-400 transition ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
            >
              Témoignages
            </Link>
            <Link 
              href="#localisation" 
              className={`hover:text-red-400 transition ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
            >
              Localisation
            </Link>
            <Link 
              href="#contact" 
              className={`hover:text-red-400 transition ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
            >
              Contact
            </Link>
            <Link 
              href="#dons" 
              className={`${
                isScrolled 
                  ? "bg-red-600 hover:bg-red-700 text-white" 
                  : "bg-white hover:bg-blue-50 text-blue-900"
              } font-bold py-2 px-6 rounded-full transition duration-300`}
            >
              Faire un don
            </Link>
          </nav>
          
          {/* Bouton menu mobile */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
        
        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="#about" 
                className={`hover:text-red-400 transition ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="#pourquoi" 
                className={`hover:text-red-400 transition ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pourquoi
              </Link>
              <Link 
                href="#temoignages" 
                className={`hover:text-red-400 transition ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Témoignages
              </Link>
              <Link 
                href="#localisation" 
                className={`hover:text-red-400 transition ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Localisation
              </Link>
              <Link 
                href="#contact" 
                className={`hover:text-red-400 transition ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="#dons" 
                className={`${
                  isScrolled 
                    ? "bg-red-600 hover:bg-red-700 text-white" 
                    : "bg-white hover:bg-blue-50 text-blue-900"
                } font-bold py-2 px-6 rounded-full transition duration-300 inline-block text-center mt-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Faire un don
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 