import { User, Heart, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Qui je suis",
      description: "Développeuse web passionnée avec une vision entrepreneuriale"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mes intérêts",
      description: "Web, innovation, entrepreneuriat et impact social"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Ma mission",
      description: "Connecter les personnes et les opportunités via la technologie"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Mon approche",
      description: "Solutions créatives et intelligentes pour des problèmes réels"
    }
  ];

  // 🔽 Fonction de téléchargement du CV
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV-ALLALI Fadoua.pdf';
    link.download = 'CV-ALLALI Fadoua.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🔹 Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-orange-600 mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-950 to-orange-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 🔹 Colonne gauche : image + citation */}
          <div className="space-y-8">
            <div className="relative w-full h-96 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
              
              {/* 🖼️ Image d’arrière-plan avec filtre uniquement sur l’image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/bg.jpeg')",
                  filter: "brightness(0.5)", // ✅ assombrit uniquement l’image
                  zIndex: 0,
                }}
              ></div>

              {/* 💬 Contenu au-dessus de l’image */}
              <div className="relative z-10 text-center bg-white/20 dark:bg-black/40 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-950 to-orange-600 flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-white font-dancing">alfa</span>
                </div>
                <p className="text-gray-100 dark:text-gray-200 text-lg font-semibold">ALLALI Fadoua</p>
                <p className="text-gray-200 dark:text-gray-300">Web Developer</p>
              </div>
            </div>

            {/* 🧠 Citation */}
            <blockquote className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-orange-600">
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
                "La technologie n'est puissante que lorsqu'elle sert à créer des connexions humaines authentiques."
              </p>
              <cite className="text-orange-600 font-semibold">- Ma philosophie de développement</cite>
            </blockquote>
          </div>

          {/* 🔹 Colonne droite : texte + points forts */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">
                Mon parcours et ma vision
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
                Développeuse web passionnée basée en Algérie, je crois fermement au pouvoir de la technologie 
                pour transformer des idées en solutions concrètes. Mon parcours m'a menée à explorer 
                l'intersection entre développement technique et impact social.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                Chaque projet que j'entreprends est guidé par une question simple : comment cette solution 
                peut-elle améliorer la vie des utilisateurs et créer de vraies opportunités ? 
                C'est cette approche qui m'anime au quotidien.
              </p>
            </div>

            {/* 🌟 Grille des points forts */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-950 dark:bg-orange-600 text-white rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            {/* 📄 Bouton CV */}
            <div className="pt-6">
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-gradient-to-r from-blue-950 to-orange-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold"
              >
                Télécharger mon CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
