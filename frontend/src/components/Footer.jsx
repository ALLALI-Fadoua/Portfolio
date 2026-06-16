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
              Passionate web developer creating innovative solutions 
              that connect people and opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-600">Quick Navigation</h4>
            <nav className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    document.querySelector(`#${item.id}`).scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-orange-600 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Philosophy */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-600">My Philosophy</h4>
            <blockquote className="text-gray-300 italic">
              "Every line of code written with passion can turn an idea into reality 
              and create a positive impact in the lives of users."
            </blockquote>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} alfa. All rights reserved.
            </div>

            {/* Fun fact */}
            <div className="text-gray-500 text-xs italic">
              "a living demonstration of my technical skills ✨"
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <Code className="w-4 h-4 text-orange-600" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-orange-600" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;