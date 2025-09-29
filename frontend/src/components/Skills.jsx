import { Code, Palette, Database, Globe, Users, Lightbulb, Target, Zap } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { 
      name: "Web Development", 
      icon: <Code className="w-8 h-8" />, 
      description: "HTML, CSS, JavaScript, React, Vue.js"
    },
    { 
      name: "UI/UX Design", 
      icon: <Palette className="w-8 h-8" />, 
      description: "Design thinking, prototypage, interfaces intuitives"
    },
    { 
      name: "Database Design", 
      icon: <Database className="w-8 h-8" />, 
      description: "MySQL, MongoDB, optimisation"
    },
    { 
      name: "API Integration", 
      icon: <Globe className="w-8 h-8" />, 
      description: "REST, intégrations tierces"
    },
    { 
      name: "Responsive Design", 
      icon: <Zap className="w-8 h-8" />, 
      description: "Mobile-first, performance, accessibilité"
    }
  ];

  const softSkills = [
    { name: "Créativité", icon: <Lightbulb className="w-8 h-8" /> },
    { name: "Résolution de problèmes", icon: <Target className="w-8 h-8" /> },
    { name: "Travail d'équipe", icon: <Users className="w-8 h-8" /> },
    { name: "Adaptabilité", icon: <Zap className="w-8 h-8" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-orange-600 mb-4">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-950 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Une combinaison équilibrée de compétences techniques solides et de qualités humaines essentielles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center justify-center lg:justify-start gap-3">
                <Code className="w-8 h-8 text-blue-950 dark:text-orange-600" />
                Compétences Techniques
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Technologies et outils maîtrisés pour créer des solutions web complètes
              </p>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-950 dark:bg-orange-600 text-white rounded-lg group-hover:bg-gradient-to-br group-hover:from-blue-950 group-hover:to-orange-600 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Indicateur visuel sans pourcentage */}
                  <div className="mt-4 flex justify-center">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-950 to-orange-600 opacity-80"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center justify-center lg:justify-start gap-3">
                <Users className="w-8 h-8 text-orange-600" />
                Soft Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Qualités humaines qui enrichissent mon approche du développement
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-600 to-blue-950 rounded-full flex items-center justify-center text-white mb-4 hover:rotate-6 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-gradient-to-b border-blue-950 dark:border-orange-600">
              <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4 text-center">
                Approche Collaborative
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                Je privilégie une approche collaborative où l'écoute active, la communication claire 
                et l'adaptabilité permettent de transformer les défis en opportunités d'innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;