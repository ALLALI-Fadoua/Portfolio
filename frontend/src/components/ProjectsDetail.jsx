import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Zap, CheckCircle, Code, Layers, Calendar, Users, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import Header from './Header';
import { sqlMiroir, mehneti, portfolio, fitora } from '../data/projects/index.js';

const projectsData = {
  "sql-miroir": sqlMiroir,
  "mehneti":    mehneti,
  "portfolio":  portfolio,
  "fitora":     fitora,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h2>
          <Link to="/" className="text-orange-600 hover:text-orange-700 font-semibold">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/#projects')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-950 dark:hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to projects</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                {(project.url !== "#" || project.githubUrl !== "#") ? (
                  <a 
                    href={project.url !== "#" ? project.url : project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors inline-flex items-center gap-3"
                  >
                    {project.title}
                    <ExternalLink className="w-8 h-8" />
                  </a>
                ) : (
                  project.title
                )}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-gray-900 dark:text-white">{project.year}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-gray-900 dark:text-white">{project.team}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <Target className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-gray-900 dark:text-white">{project.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-950 dark:border-orange-600 text-blue-950 dark:text-orange-600 rounded-lg hover:bg-blue-950 dark:hover:bg-orange-600 hover:text-white transition-all font-semibold"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>
                )}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-600 via-orange-500 to-orange-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-8xl font-dancing text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-orange-400 to-orange-600">
                        {project.title.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>
                <div className={`absolute bottom-4 right-4 px-4 py-2 rounded-lg font-semibold text-sm shadow-lg ${
                  project.availableForWork 
                    ? 'bg-green-600 text-white' 
                    : 'bg-red-600 text-white'
                }`}>
                  {project.availableForWork ? 'Available for work' : 'Not available for work'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-950 dark:text-orange-600 mb-8 text-center">
            Project Overview
          </h2>
          
          {project.heroImage && (
            <div className="mb-6 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={project.heroImage} 
                alt={`${project.title} - Main view`}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages?.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gray-100 dark:bg-gray-800 h-48"
              >
                <img
                  src={image.url}
                  alt={image.title || `${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-contain p-2"
                />
                {image.title && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-blue-950 dark:text-orange-600 mb-4">
                Project Overview
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.context}
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-blue-950 dark:text-orange-600">
                  Key Features
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-950 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-blue-950 dark:text-orange-600">
                  Technical Challenges
                </h2>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-orange-600 font-bold">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-blue-950 dark:text-orange-600">
                  Outcomes
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-orange-600" />
                  <h3 className="font-bold text-blue-950 dark:text-orange-600">
                    Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-gray-900 text-blue-950 dark:text-orange-600 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h3 className="font-bold text-blue-950 dark:text-orange-600 mb-4">
                  Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Category:</span>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{project.category}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Year:</span>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{project.year}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Team:</span>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{project.team}</p>
                  </div>
                </div>
              </div>

              <div className={`bg-gradient-to-br ${project.heroColor} p-6 rounded-xl text-white`}>
                <h3 className="font-bold mb-2">Interested?</h3>
                <p className="text-sm text-white/80 mb-4">
                  Find out how I can help you
                </p>
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full px-4 py-2 bg-white text-blue-950 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectDetail;