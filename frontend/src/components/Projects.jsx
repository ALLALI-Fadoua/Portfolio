import { ExternalLink, Github, Zap, Users, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SQL Miroir",
      description: "A web app simulating a relational database system (SGBDR). Built to execute SQL-like operations through an interactive UI.",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      features: [
        "DB & Table Simulation",
        "SQL Query Execution",
        "Real-time Result Display",
        "Metadata Management"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/ALLALI-Fadoua/SQL-Miroir",
      image: "sqlmiroir",
      category: "Full-Stack Simulation"
    },
    {
      title: "Mehneti.dz",
      description: "A smart platform connecting job seekers and employers in Algeria. Full-stack web application designed, built, and led by me.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: ["Smart Matching", "Real-time Chat", "Profile Management", "Job Analytics"],
      liveUrl: "#",
      githubUrl: "https://github.com/ALLALI-Fadoua/Mihneti",
      image: "mehneti",
      category: "Full-Stack Platform"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, dark mode, and smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      features: ["Responsive Design", "Dark Mode", "Smooth Animations", "Contact Form"],
      liveUrl: "#",
      githubUrl: "#",
      image: "portfolio",
      category: "Web Design"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-950 to-orange-600 flex items-center justify-center relative overflow-hidden">
        <div className="text-center text-white">
          <div className="text-4xl font-bold mb-2">{project.title.charAt(0)}</div>
          <div className="text-sm opacity-90">{project.category}</div>
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Project Content */}
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

        {/* Technologies */}
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

        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Zap className="w-4 h-4 text-orange-600" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={project.githubUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-950 dark:border-orange-600 text-blue-950 dark:text-orange-600 rounded-lg hover:bg-blue-950 dark:hover:bg-orange-600 hover:text-white dark:hover:text-white transition-all duration-200 font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Call to Action */}
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