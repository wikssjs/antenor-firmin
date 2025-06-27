"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="localisation" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-wider">Où nous trouver</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-blue-900">Localisation de l&apos;école</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-800">
            L&apos;École Anténor Firmin est située au cœur de Belladère, une commune frontalière à l&apos;est d&apos;Haïti.
            Venez nous rendre visite pour constater l&apos;avancement des travaux de reconstruction.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="lg:w-2/3"
          >
            <div className="w-full h-[450px] rounded-xl shadow-lg overflow-hidden border-2 border-blue-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.81767023622257!2d-71.7640825565568!3d18.868391300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb0b0763e22399b%3A0xe44c69c5803359d9!2zVjY5UCs4SlIsIEJlbGxhZGVyZSwgSGHDr3Rp!5e1!3m2!1sfr!2sca!4v1744306159516!5m2!1sfr!2sca"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de l'École Anténor Firmin"
              ></iframe>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{...fadeIn, transition: { delay: 0.2, duration: 0.6 }}}
            className="lg:w-1/3"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">Informations pratiques</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Adresse complète</h4>
                    <p className="text-gray-800">V69P+8JR, Belladère, Haïti</p>
                    <p className="text-gray-700 text-sm mt-1">À proximité de la place centrale</p>
                    <p className="text-gray-700 text-sm mt-1">Département du Centre-Est</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Horaires de visite</h4>
                    <p className="text-gray-800">Lundi - Vendredi: 9h00 - 16h00</p>
                    <p className="text-gray-800">Samedi: 9h00 - 12h00</p>
                    <p className="text-gray-800">Dimanche: Fermé</p>
                    <p className="text-gray-700 text-sm mt-1">Visites guidées sur rendez-vous</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Accès et transport</h4>
                    <p className="text-gray-800">Stationnement disponible à proximité</p>
                    <p className="text-gray-800">Accessible en transport en commun</p>
                    <p className="text-gray-800">Taxi-moto disponible</p>
                    <p className="text-gray-700 text-sm mt-1">Distance depuis Port-au-Prince: ~3h30</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-200">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=18.8683913,-71.7640826"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Obtenir l&apos;itinéraire
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 