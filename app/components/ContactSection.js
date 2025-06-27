"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="py-24 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">Contactez-nous</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-indigo-900">Restons en contact</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-700">
            Vous avez des questions sur notre projet ou souhaitez vous impliquer davantage ? 
            N&apos;hésitez pas à nous contacter, nous serons ravis d&apos;échanger avec vous.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Informations de contact */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="md:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h5 className="font-medium text-gray-800">Email</h5>
                    <a href="mailto:contact@ecole-antenor-firmin.org" className="text-indigo-600 hover:text-indigo-800 transition">gabreaf.b@outlook.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h5 className="font-medium text-gray-800">Téléphone</h5>
                    <p className="text-gray-700">+1 438 874 4733</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h5 className="font-medium text-gray-800">Adresse</h5>
                    <p className="text-gray-700">975 Rue Maisonneuve, Saint-Hubert,<br />QC, J3Y 7S7</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
               
              </div>
            </div>
          </motion.div>
          
          {/* Formulaire de contact */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{...fadeIn, transition: { delay: 0.2, duration: 0.6 }}}
            className="md:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">Envoyez-nous un message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Prénom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Votre adresse email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Sujet</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="don">Question sur les dons</option>
                    <option value="benevole">Devenir bénévole</option>
                    <option value="partenariat">Proposition de partenariat</option>
                    <option value="presse">Demande presse/média</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                  />
                  <label htmlFor="privacy-policy" className="ml-3 text-gray-700">
                    J&apos;accepte que mes données soient traitées conformément à la politique de confidentialité
                  </label>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 