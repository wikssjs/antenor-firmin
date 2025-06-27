"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DonationSection() {
  const [donationType, setDonationType] = useState("unique");
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Fonction pour formater les montants en gourdes haïtiennes
  const formatHTG = (amount) => {
    return new Intl.NumberFormat('fr-HT', {
      style: 'currency',
      currency: 'HTG',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleDonationAmountChange = (amount) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount("custom");
  };

  return (
    <section id="dons" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">Soutenez-nous</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-indigo-900">Faites un don</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-700">
            Votre générosité permettra de reconstruire l&apos;École Anténor Firmin et d&apos;offrir un avenir meilleur aux enfants de Belladère.
            Chaque don compte, quelle que soit sa taille.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Utilisation des fonds */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-800">Comment seront utilisés vos dons</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                    <span className="text-indigo-700 font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-indigo-700">Matériaux de construction</h4>
                    <p className="text-gray-600">Achat de ciment, bois, acier et autres matériaux nécessaires pour reconstruire les bâtiments endommagés.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                    <span className="text-indigo-700 font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-indigo-700">Main d&apos;œuvre locale</h4>
                    <p className="text-gray-600">Rémunération des ouvriers et artisans locaux, créant ainsi des emplois dans la communauté de Belladère.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                    <span className="text-indigo-700 font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-indigo-900">Équipement scolaire</h4>
                    <p className="text-gray-600">Achat de mobilier, tableaux, livres et matériel pédagogique pour équiper les salles de classe.</p>
                  </div>
                </div>
                

              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-indigo-900">Transparence totale</h4>
                    <p className="text-sm text-gray-600">Nous publions régulièrement des rapports détaillés sur l&apos;utilisation des fonds.</p>
                  </div>
                  <Link 
                    href="#" 
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                  >
                    Voir les rapports
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Formulaire de don */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{...fadeIn, transition: { delay: 0.2, duration: 0.6 }}}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-800">Faire un don</h3>
              
              <form className="space-y-6">
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className={`flex-1 py-2 px-4 rounded-lg border ${
                      donationType === 'unique' 
                        ? 'bg-indigo-600 text-white border-indigo-600' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setDonationType('unique')}
                  >
                    Don unique
                  </button>
                  <button
                    type="button"
                    className={`flex-1 py-2 px-4 rounded-lg border ${
                      donationType === 'mensuel' 
                        ? 'bg-indigo-600 text-white border-indigo-600' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setDonationType('mensuel')}
                  >
                    Don mensuel
                  </button>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Montant du don</label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <button
                      type="button"
                      className={`py-3 rounded-lg border ${
                        donationAmount === 1000 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => handleDonationAmountChange(1000)}
                    >
                      {formatHTG(1000)}
                    </button>
                    <button
                      type="button"
                      className={`py-3 rounded-lg border ${
                        donationAmount === 2500 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => handleDonationAmountChange(2500)}
                    >
                      {formatHTG(2500)}
                    </button>
                    <button
                      type="button"
                      className={`py-3 rounded-lg border ${
                        donationAmount === 5000 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => handleDonationAmountChange(5000)}
                    >
                      {formatHTG(5000)}
                    </button>
                    <button
                      type="button"
                      className={`py-3 rounded-lg border ${
                        donationAmount === 10000 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => handleDonationAmountChange(10000)}
                    >
                      {formatHTG(10000)}
                    </button>
                    <button
                      type="button"
                      className={`py-3 rounded-lg border ${
                        donationAmount === 25000 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => handleDonationAmountChange(25000)}
                    >
                      {formatHTG(25000)}
                    </button>
                    <button
                      type="button"
                      className={`py-3 rounded-lg border ${
                        donationAmount === 'custom' 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setDonationAmount('custom')}
                    >
                      Autre
                    </button>
                  </div>
                  
                  {donationAmount === 'custom' && (
                    <div className="mt-3">
                      <label className="sr-only">Montant personnalisé</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">HTG</span>
                        </div>
                        <input
                          type="number"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Montant personnalisé"
                          min="1"
                        />
                      </div>
                    </div>
                  )}
                </div>
                
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
                  <label className="block text-gray-700 font-medium mb-2">Téléphone (optionnel)</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                
                <div className="flex items-start mt-4">
                  <input
                    type="checkbox"
                    id="recu-fiscal"
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
                  />
                  <label htmlFor="recu-fiscal" className="ml-3 text-gray-700">
                    Je souhaite recevoir un reçu fiscal
                  </label>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    {donationType === 'unique' ? 'Faire un don maintenant' : 'Mettre en place un don mensuel'}
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 text-center mt-4">
                  Paiement sécurisé par carte bancaire, MonCash ou virement
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}