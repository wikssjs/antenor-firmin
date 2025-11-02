"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TestimonialSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="temoignages" className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">Ils témoignent</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-indigo-900">Témoignages</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-700">
            Découvrez les témoignages d&apos;anciens élèves, de parents et d&apos;enseignants sur l&apos;importance 
            de l&apos;École Anténor Firmin dans leur vie et pour la communauté de Belladère.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 flex-grow">
                &quot;L&apos;École Anténor Firmin a été le fondement de ma réussite. C&apos;est là que j&apos;ai appris non seulement 
                à lire et à écrire, mais aussi les valeurs qui m&apos;ont guidé tout au long de ma vie. Sa reconstruction 
                est essentielle pour que les enfants d&apos;aujourd&apos;hui aient les mêmes chances que j&apos;ai eues.&quot;
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-200 flex items-center justify-center mr-4">
                  <span className="text-indigo-700 font-bold">JB</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Jean Baptiste</p>
                  <p className="text-sm text-gray-600">Ancien élève, Promotion 2005</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{...fadeIn, transition: { delay: 0.1, duration: 0.6 }}}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 flex-grow">
                &quot;En tant qu&apos;enseignante depuis 15 ans à l&apos;École Anténor Firmin, j&apos;ai vu des générations d&apos;élèves 
                s&apos;épanouir malgré des conditions difficiles. Aujourd&apos;hui, nous enseignons dans des abris temporaires 
                qui fuient quand il pleut. Nos enfants méritent mieux. Ils méritent un vrai lieu d&apos;apprentissage.&quot;
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-200 flex items-center justify-center mr-4">
                  <span className="text-indigo-700 font-bold">MJ</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Marie Joseph</p>
                  <p className="text-sm text-gray-600">Enseignante depuis 2008</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{...fadeIn, transition: { delay: 0.2, duration: 0.6 }}}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 flex-grow">
                &quot;Mes trois enfants fréquentent l&apos;École Anténor Firmin. Depuis l&apos;effondrement du bâtiment, 
                ils reviennent souvent mouillés quand il pleut, et ils ne peuvent plus faire certaines activités. 
                Cette école est le cœur de notre communauté, et sa reconstruction donnera un nouvel espoir 
                à nos enfants.&quot;
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-200 flex items-center justify-center mr-4">
                  <span className="text-indigo-700 font-bold">RL</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Rose Louis</p>
                  <p className="text-sm text-gray-600">Parent d&apos;élèves</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="bg-indigo-600 text-white p-8 rounded-xl shadow-lg"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ensemble pour l&apos;éducation</h3>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              Chaque témoignage renforce notre détermination à offrir aux enfants de Belladère 
              un environnement d&apos;apprentissage sûr et moderne. Votre soutien fait la différence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 