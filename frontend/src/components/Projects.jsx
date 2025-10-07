import { ExternalLink, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: "sql-miroir",
      title: "SQL Miroir",
      description: "Application web simulant un système de base de données relationnelle (SGBDR). Conçue pour exécuter des opérations similaires au SQL via une interface interactive.",
      technologies: ["React", "Vite", "Node.js", "Express", "MySQL"],
      features: [
        "Simulation de bases de données et de tables",
        "Exécution de requêtes SQL",
        "Affichage des résultats en temps réel",
        "Gestion des métadonnées"
      ],
      url: "www.sql.com",
      image: "/assets/SQL-Home.png",
      category: "Simulation Full-Stack"
    },
    {
      id: "mehneti",
      title: "Mehneti.dz",
      description: "Plateforme algérienne intelligente qui connecte chercheurs d’emploi et recruteurs pour optimiser l’écosystème du travail en Algérie.",
      technologies: ["React", "Vite", "Node.js", "MongoDB", "Express"],
      features: [
        "Appariement intelligent",
        "Chat en temps réel",
        "Gestion des profils",
        "Analyse des offres d'emploi"
      ],
      url: "#",
      image: "/assets/Mihneti-Home.png",
      category: "Plateforme Full-Stack"
    },
    {
      id: "portfolio",
      title: "Site Portfolio",
      description: "Site web personnel qui présente les projets, compétences et réalisations d’une personne, souvent utilisé pour mettre en valeur son profil professionnel et attirer des opportunités.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      features: [
        "Interface moderne et minimaliste",
        "Intégration des réseaux sociaux",
        "Section projets interactive",
        "Formulaire de contact"
      ],
      url: "#",
      image: "/assets/Portfolio-Home.png",
      category: "Web Design"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div 
        className="h-48 flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundColor: '#1e3a8a'
        }}
      >
        <div className="text-center text-white z-10">
          <div className="text-4xl font-bold mb-2">{project.title.charAt(0)}</div>
          <div className="text-sm opacity-90">{project.category}</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 to-orange-600/70 group-hover:from-blue-950/50 group-hover:to-orange-600/50 transition-all duration-300"></div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              {project.title}
            </h3>
            <span className="inline-block px-3 py-1 bg-orange-600/10 text-orange-600 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.description}
        </p>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-blue-950/10 dark:bg-blue-400/10 text-blue-950 dark:text-blue-400 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Fonctionnalités principales:</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Zap className="w-4 h-4 text-orange-600" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            to={`/projects/${project.id}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-950 dark:bg-orange-600 text-white rounded-lg hover:bg-blue-900 dark:hover:bg-orange-700 transition-colors duration-200 font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Plus
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-950 dark:border-orange-600 text-blue-950 dark:text-orange-600 rounded-lg hover:bg-blue-950 dark:hover:bg-orange-600 hover:text-white dark:hover:text-white transition-all duration-200 font-medium"
          >
            <Globe className="w-4 h-4" />
            Explorer
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-orange-600 mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-950 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets qui illustrent ma capacité à créer des solutions web innovantes et impactantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-950 to-orange-600 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Vous avez un projet en tête ?</h3>
            <p className="text-lg mb-6 opacity-90">
              Collaborons pour transformer votre idée en une solution web exceptionnelle
            </p>
            <button className="px-8 py-3 bg-white text-blue-950 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              Démarrer un Projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;