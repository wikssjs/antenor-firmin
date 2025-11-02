"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="equipe" className="py-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">Qui sommes-nous</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-indigo-900">Notre équipe</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="lg:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/team.jpeg"
                alt="Équipe GABREAF - Groupe d'Action pour la Reconstruction de l'École Anténor Firmin"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{...fadeIn, transition: { delay: 0.2, duration: 0.6 }}}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-900">
                GABREAF - Une mission commune
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Le <strong>Groupe d'Action pour la Reconstruction de l'École Anténor Firmin (GABREAF)</strong> 
                  est une organisation communautaire composée d'anciens élèves, de parents, d'enseignants et de 
                  membres de la diaspora belladeroise unis par une vision commune.
                </p>
                
                <p className="leading-relaxed">
                  Notre équipe multidisciplinaire rassemble des professionnels de l'éducation, de l'ingénierie, 
                  de la gestion de projet et du développement communautaire. Ensemble, nous mettons nos compétences 
                  et notre passion au service de la reconstruction de cette institution emblématique.
                </p>
                
                <p className="leading-relaxed">
                  Guidés par les valeurs de solidarité, de transparence et d'excellence éducative, nous travaillons 
                  sans relâche pour offrir aux enfants de Belladère un environnement d'apprentissage moderne, 
                  sûr et stimulant qui leur permettra de réaliser leur plein potentiel.
                </p>
                
                <div className="bg-indigo-50 p-4 rounded-lg mt-6">
                  <p className="text-indigo-800 font-medium italic">
                    "L'éducation est l'arme la plus puissante pour changer le monde. Ensemble, 
                    nous construisons l'avenir de Belladère, un enfant à la fois."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{...fadeIn, transition: { delay: 0.4, duration: 0.6 }}}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-red-600 text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-xl md:text-2xl font-bold mb-4">
              Rejoignez notre mission
            </h4>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              Que vous soyez ancien élève, parent, enseignant ou simplement quelqu'un qui croit en l'importance 
              de l'éducation, votre contribution peut faire la différence. Ensemble, reconstruisons l'École Anténor Firmin.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
