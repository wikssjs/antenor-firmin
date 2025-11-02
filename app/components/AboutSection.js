"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">À propos</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-indigo-900">Notre mission</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="lg:w-1/2"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">L&apos;École Anténor Firmin</h3>
              <p className="text-gray-700 mb-4">
                Fondée en 1948 par Durmasais Éstimé, l&apos;École Anténor Firmin est un établissement scolaire essentiel pour la communauté de Belladère, 
                une ville frontalière située dans le département du Centre d&apos;Haïti. Pendant des décennies, elle a fourni une éducation de qualité à des 
                milliers d&apos;enfants de la région.
              </p>
              <p className="text-gray-700 mb-4">
                Malheureusement, suite à l&apos;instabilité politique, l&apos;école a subi d&apos;importants 
                dommages structurels, rendant les bâtiments dangereux pour les élèves et le personnel enseignant.
              </p>
              <p className="text-gray-700">
                GABREAF s&apos;est donnée pour mission de rénover entièrement cette école, afin de permettre aux enfants 
                de Belladère de retrouver un environnement d&apos;apprentissage sûr et stimulant.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{...fadeIn, transition: { delay: 0.2, duration: 0.6 }}}
            className="lg:w-1/2"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">Nos objectifs</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-indigo-900">Court terme</h4>
                    <p className="text-gray-600">Rénover et ajouter deux nouvelles salles de classe qui sont dans le couloir de l&apos;école depuis 47 ans depuis la reforme du ministre Joseph C. Bernard</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-indigo-900">Moyen terme</h4>
                    <p className="text-gray-600">Équiper l&apos;école de matériel pédagogique moderne et créer une bibliothèque et un laboratoire informatique.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-indigo-900">Long terme</h4>
                    <p className="text-gray-600">Développer des programmes éducatifs innovants et former les enseignants aux méthodes pédagogiques modernes.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 