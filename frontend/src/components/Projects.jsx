import { ExternalLink, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects/index.js";

const Projects = () => {
  const sortedProjects = [...projects].sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  const ProjectCard = ({ project }) => (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">

      {/* Hero */}
      <div
        className="relative h-56 bg-cover bg-center overflow-hidden"
        style={{
          backgroundColor: "#1E3A8A",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/60 to-orange-600/70 transition-all duration-300 group-hover:opacity-90"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">

          {project.logo ? (
            <img
              src={project.logo}
              alt={project.title}
              className="w-20 h-20 object-contain mb-4 drop-shadow-lg"
            />
          ) : (
            <div className="text-5xl font-bold text-white mb-4">
              {project.title.charAt(0)}
            </div>
          )}

          <h3 className="text-2xl font-bold text-white text-center">
            {project.title}
          </h3>

          <p className="text-sm text-white/90 mt-2">
            {project.category}
          </p>

          {project.year === "2026" && (
            <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
              NEW
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-5">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-2">

            {project.technologies.slice(0, 5).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm bg-blue-950/10 text-blue-950 dark:bg-blue-400/10 dark:text-blue-400"
              >
                {tech}
              </span>
            ))}

            {project.technologies.length > 5 && (
              <span className="px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                +{project.technologies.length - 5}
              </span>
            )}

          </div>
        </div>

        {/* Features */}

        <div className="mb-6 flex-1">

          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Key Features
          </h4>

          <div className="space-y-2">

            {project.features.slice(0, 4).map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <Zap className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}

            {project.features.length > 4 && (
              <div className="text-sm text-orange-600 font-medium">
                +{project.features.length - 4} more features
              </div>
            )}

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-3 mt-auto">

          <Link
            to={`/projects/${project.id}`}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-orange-600 py-3 text-white hover:bg-blue-900 transition"
          >
            <ExternalLink size={18} />
            More
          </Link>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg border-2 border-blue-950 text-blue-950 dark:border-orange-600 dark:text-orange-600 hover:bg-blue-950 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white transition"
          >
            <Globe size={18} />
            Explore
          </a>

        </div>

      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-blue-950 dark:text-orange-600">
            My Projects
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-950 to-orange-600 mx-auto my-6"></div>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A selection of projects that demonstrate my passion for building
            scalable, user-friendly, and impactful web applications.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        {/* CTA */}

        <div className="mt-20">

          <div className="rounded-2xl bg-gradient-to-r from-blue-950 to-orange-600 text-white p-10 text-center">

            <h3 className="text-3xl font-bold mb-4">
              Have a Project in Mind?
            </h3>

            <p className="text-lg opacity-90 mb-8">
              Let's collaborate to transform your ideas into modern and impactful digital experiences.
            </p>

            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-950 hover:bg-gray-100 transition">
              Start a Project
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;