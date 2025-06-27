export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Drapeau d'Haïti en SVG */}
              <div className="w-12 h-8 relative shadow-sm overflow-hidden">
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
              <h3 className="text-2xl md:text-3xl font-bold text-white">Groupe d'action pour la rénovation de l'école Anténor Firmin (GABREAF)</h3>
            </div>
            <p className="text-white mb-6 max-w-md">
              Notre mission est de reconstruire l'École Anténor Firmin à Belladère, Haïti, 
              pour offrir un environnement d'apprentissage sûr et stimulant aux enfants de la région.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-blue-200 transition">Accueil</a></li>
              <li><a href="#about" className="text-white hover:text-blue-200 transition">À propos</a></li>
              <li><a href="#pourquoi" className="text-white hover:text-blue-200 transition">Pourquoi reconstruire</a></li>
              <li><a href="#temoignages" className="text-white hover:text-blue-200 transition">Témoignages</a></li>
              <li><a href="#dons" className="text-white hover:text-blue-200 transition">Faire un don</a></li>
              <li><a href="#localisation" className="text-white hover:text-blue-200 transition">Localisation</a></li>
              <li><a href="#contact" className="text-white hover:text-blue-200 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Informations légales</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-blue-200 transition">Mentions légales</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition">Politique de confidentialité</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition">Conditions générales</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition">Statuts de l'association</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition">Rapports d'activité</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white">&copy; {new Date().getFullYear()} GABREAF. Tous droits réservés.</p>
          <div className="flex items-center mt-2 md:mt-0">
            <p className="text-white text-sm mr-2">Fièrement haïtien</p>
            {/* Mini drapeau */}
            <div className="w-6 h-4 relative shadow-sm overflow-hidden">
              <svg viewBox="0 0 10 6" className="absolute inset-0 w-full h-full">
                <rect width="10" height="3" fill="#00209F" />
                <rect y="3" width="10" height="3" fill="#D21034" />
                <g transform="translate(3.5, 1.5)">
                  <rect width="3" height="3" fill="white" />
                  <g transform="translate(0.75, 0.75)" fill="#00209F">
                    <circle cx="0.75" cy="0.75" r="0.5" />
                    <polygon points="0.75,0 1.5,1.5 0,1.5" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 