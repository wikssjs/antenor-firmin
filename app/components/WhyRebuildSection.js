"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function WhyRebuildSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Références pour les lecteurs vidéo
  const degatVideoRef = useRef(null);
  const planVideoRef = useRef(null);
  
  // États pour les modales vidéo
  const [showDegatVideo, setShowDegatVideo] = useState(false);
  const [showPlanVideo, setShowPlanVideo] = useState(false);

  // Ajout des états pour la modale d'image
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Listes des images pour chaque section
  const degatImages = [
    "/toit.jpeg", 
    "/mur.jpeg",
    "/degat-2.jpg"
  ];

  const elevesImages = [
    "/eleves-1.jpeg",
    "/eleves-2.jpeg",
    "/eleves-3.jpeg",
    "/eleves-4.jpeg",
    "/eleves-5.jpeg"
  ];

  // Fonction pour ouvrir la modale d'image
  const openImageModal = (image, gallery, index) => {
    setCurrentImage(image);
    setCurrentGallery(gallery);
    setCurrentIndex(index);
    setShowImageModal(true);
  };

  // Fonctions de navigation
  const showNextImage = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % currentGallery.length;
      setCurrentImage(currentGallery[nextIndex]);
      return nextIndex;
    });
  };

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexNew = (prevIndex - 1 + currentGallery.length) % currentGallery.length;
      setCurrentImage(currentGallery[prevIndexNew]);
      return prevIndexNew;
    });
  };

  // Gestionnaire de touches clavier
  const handleKeyDown = (event) => {
    if (!showImageModal) return;
    
    if (event.key === 'ArrowRight') {
      showNextImage();
    } else if (event.key === 'ArrowLeft') {
      showPrevImage();
    } else if (event.key === 'Escape') {
      setShowImageModal(false);
    }
  };

  // Ajouter l'effet pour les touches clavier
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showImageModal]);

  return (
    <section id="pourquoi" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">Pourquoi reconstruire</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-indigo-900">L&apos;importance de ce projet</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-700">
            L&apos;École Anténor Firmin a subi d&apos;importants dégâts qui compromettent la sécurité des élèves et la qualité de l&apos;enseignement.
            Découvrez pourquoi cette reconstruction est cruciale pour l&apos;avenir de la communauté.
          </p>
        </motion.div>
        
        {/* Section des dégâts avec images en dessous */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="h-72 bg-indigo-800 relative">
              <img 
                src="/toit.jpeg" 
                alt="Dégâts structurels - image principale" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">Les dégâts</h3>
              <p className="text-gray-700 mb-6 text-lg">
                Les intempéries ont gravement endommagé les murs porteurs et le toit du bâtiment principal, 
                rendant plusieurs salles de classe inutilisables et dangereuses pour les élèves et le personnel.
              </p>
              <div className="mb-6">
                <button 
                  className="text-white bg-indigo-600 hover:bg-indigo-700 font-semibold py-3 px-6 rounded-lg flex items-center"
                  onClick={() => setShowDegatVideo(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Voir la vidéo des dégâts
                </button>
              </div>
            </div>
          </div>
          
          {/* Galerie d'images des dégâts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {degatImages.map((img, index) => (
              <div 
                key={index} 
                className="relative h-80 overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => openImageModal(img, degatImages, index)}
              >
                <img 
                  src={img} 
                  alt={`Dégât ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Section du plan de reconstruction */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{...fadeIn, transition: { delay: 0.1, duration: 0.6 }}}
          className="mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className=" h-96 bg-indigo-700 relative">
              <img 
                src="/plan.png" 
                alt="Plan de reconstruction" 
                className="w-full h-full object-cover" 
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">Le plan de reconstruction</h3>
              <p className="text-gray-700 mb-6 text-lg">
                Nous avons élaboré un plan détaillé pour reconstruire l&apos;école avec des infrastructures modernes, 
                durables et adaptées aux besoins de la communauté éducative de Belladère.
              </p>
              <div className="mb-6">
                <button 
                  className="text-white bg-indigo-600 hover:bg-indigo-700 font-semibold py-3 px-6 rounded-lg flex items-center"
                  onClick={() => setShowPlanVideo(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Voir la vidéo du plan
                </button>
              </div>
            </div>
          </div>
          
        
        </motion.div>
        
        {/* Section des élèves */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{...fadeIn, transition: { delay: 0.2, duration: 0.6 }}}
          className="mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="h-72 bg-indigo-600 relative">
              <img 
                src="/eleves-1.jpeg" 
                alt="Élèves - image principale" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">La communauté</h3>
              <p className="text-gray-700 mb-6 text-lg">
                L'école est bien plus qu'un lieu d'apprentissage : c'est un centre communautaire vital qui 
                offre stabilité et espoir dans une région confrontée à de nombreux défis socio-économiques.
              </p>
            </div>
          </div>
          
          {/* Galerie d'images des élèves */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {elevesImages.map((img, index) => (
              <div 
                key={index} 
                className="relative h-80 overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => openImageModal(img, elevesImages, index)}
              >
                <img 
                  src={img} 
                  alt={`Élèves ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="bg-indigo-50 p-8 rounded-xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6">L'urgence de la situation</h3>
              <p className="text-gray-700 mb-4 text-lg">
                Chaque jour qui passe sans action compromet davantage l'avenir éducatif des enfants de Belladère. 
                Les structures temporaires actuelles ne résisteront pas à la prochaine saison des pluies, et nous risquons 
                de perdre complètement cette institution essentielle.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Sans école adéquate, de nombreux enfants abandonnent leur scolarité, ce qui perpétue le cycle de la pauvreté 
                et limite les perspectives d'avenir de toute la communauté.
              </p>
              <p className="text-gray-700 font-medium text-lg">
                Votre soutien aujourd'hui est crucial pour inverser cette tendance et offrir un avenir meilleur aux 
                générations futures.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6">Les bénéfices de la rénovation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-lg">Un environnement d'apprentissage sûr et stimulant pour plus de 300 élèves</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-lg">Des infrastructures modernes résistantes aux intempéries futures</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-lg">Une bibliothèque et des ressources pédagogiques modernes</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-lg">Un centre communautaire pour des activités culturelles et éducatives</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-lg">Des opportunités d'emploi local pendant et après la reconstruction</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-lg">Un symbole d'espoir et de résilience pour toute la communauté</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal pour la vidéo des dégâts */}
      {showDegatVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute top-0 right-0 -mt-12 text-white hover:text-indigo-300 p-2"
              onClick={() => {
                if (degatVideoRef.current) {
                  degatVideoRef.current.pause();
                }
                setShowDegatVideo(false);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <video 
              ref={degatVideoRef}
              className="w-full rounded-lg shadow-lg" 
              controls 
              autoPlay
            >
              <source src="/degat-1.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      )}

      {/* Modal pour la vidéo du plan */}
      {showPlanVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute top-0 right-0 -mt-12 text-white hover:text-indigo-300 p-2"
              onClick={() => {
                if (planVideoRef.current) {
                  planVideoRef.current.pause();
                }
                setShowPlanVideo(false);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <video 
              ref={planVideoRef}
              className="w-full rounded-lg shadow-lg" 
              controls 
              autoPlay
            >
              <source src="/plan-1.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      )}

      {/* Ajouter la modale d'image à la fin du composant */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Bouton fermer */}
            <button 
              className="absolute top-4 right-4 text-white hover:text-indigo-300 p-2 z-50"
              onClick={() => setShowImageModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Bouton précédent */}
            <button 
              className="absolute left-4 text-white hover:text-indigo-300 p-2 z-50"
              onClick={showPrevImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative max-w-7xl max-h-full">
              <img 
                src={currentImage} 
                alt="Image en plein écran" 
                className="max-h-[90vh] max-w-full object-contain"
              />
              
              {/* Indicateur de position */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                {currentIndex + 1} / {currentGallery.length}
              </div>
            </div>

            {/* Bouton suivant */}
            <button 
              className="absolute right-4 text-white hover:text-indigo-300 p-2 z-50"
              onClick={showNextImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}