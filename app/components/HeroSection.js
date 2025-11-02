"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  
  return (
    <section className="relative min-h-screen flex items-center bg-blue-900 text-white overflow-hidden">
      {/* Overlay d'image en arrière-plan */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      
      {/* Image de fond (à remplacer par une image réelle de l&apos;école) */}
      <div className="absolute inset-0 z-[-1] bg-blue-800 flex items-center justify-center">
        <span className="text-white text-xl font-medium">Image de l&apos;école à Belladère</span>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Rénovons ensemble<br />
              <span className="text-white">l&apos;École Anténor Firmin</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
              Aidez-nous à offrir un avenir meilleur aux enfants de Belladère, Haïti, 
              en participant à la rénovation de leur école.
              <br />
              Nous solicitons l&apos;aide de toute la communauté belladeroise pour accomplir cette mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="#about" 
                className="bg-white hover:bg-blue-50 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Vague décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 