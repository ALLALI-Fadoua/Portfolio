import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 dark:bg-gray-900 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-600 font-dancing">alfa</h3>
            <p className="text-gray-300 leading-relaxed">
              Développeuse web passionnée par la création de solutions innovantes 
              qui connectent les personnes et les opportunités.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-600">Navigation Rapide</h4>
            <nav className="space-y-2">
              {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const id = item.toLowerCase().replace('à propos', 'about').replace('accueil', 'home').replace('compétences', 'skills').replace('projets', 'projects');
                    document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-orange-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Philosophy */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-600">Ma Philosophie</h4>
            <blockquote className="text-gray-300 italic">
              "Chaque ligne de code écrite avec passion peut transformer une idée en réalité 
              et créer un impact positif dans la vie des utilisateurs."
            </blockquote>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} alfa. Tous droits réservés.
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Créé avec</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>et</span>
              <Code className="w-4 h-4 text-orange-600" />
              <span>et beaucoup de</span>
              <Coffee className="w-4 h-4 text-orange-600" />
            </div>
          </div>

          {/* Fun fact */}
          <div className="text-center mt-6 text-gray-500 text-xs">
            "Ce portfolio a été entièrement développé avec React.js et Tailwind CSS 
            - une démonstration vivante de mes compétences techniques ✨"
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;