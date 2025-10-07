import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Zap, CheckCircle, Code, Layers, Calendar, Users, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import Header from './Header';

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

  const projectsData = {
    "sql-miroir": {
      title: "SQL Miroir",
      subtitle: "Simulateur de Système de Gestion de Base de Données Relationnelle",
      category: "Full-Stack Simulation",
      duration: "2 mois",
      team: "Solo",
      year: "2025",
      logo: "/assets/SQL-Logo.png",
      availableForWork: false,
      description: "SQL Miroir est une application web innovante qui simule un système de gestion de base de données relationnelle (SGBDR). Elle permet aux utilisateurs d'exécuter des opérations SQL à travers une interface utilisateur interactive et intuitive.",
      context: "Développé pour aider les étudiants et les professionnels à comprendre et à pratiquer les opérations SQL sans avoir besoin d'installer un SGBDR complet. L'application offre une expérience immersive avec une simulation complète des fonctionnalités essentielles d'une base de données relationnelle.",
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "Tailwind CSS"],
      features: [
        "Simulation complète de bases de données et de tables",
        "Exécution de requêtes SQL en temps réel",
        "Affichage instantané des résultats",
        "Gestion des métadonnées et des schémas",
        "Interface utilisateur intuitive et responsive",
        "Validation des requêtes SQL",
        "Gestion des erreurs détaillée",
        "Support des jointures et relations"
      ],
      challenges: [
        "Création d'un parseur SQL personnalisé",
        "Optimisation des performances pour grandes tables",
        "Gestion de la concurrence des requêtes",
        "Interface responsive pour tous les appareils"
      ],
      outcomes: [
        "Projet récompensé par une note exceptionnelle de 16/15",
        "Apprentissage SQL plus facile et rapide",
        "Bonne performance avec de grandes données",
        "Haute satisfaction des utilisateurs"
      ],
      githubUrl: "https://github.com/ALLALI-Fadoua/SQL-Miroir",
      url: "www.sql-miroir.com",
      heroImage: "/assets/SQL-Home.png",
      heroColor: "from-blue-900/90 to-blue-950/90",
      galleryImages: [
        { url: "/assets/SQL-Requete.png", title: "Création d’une BDD et sauvegarde dans metadonnees" },
        { url: "/assets/SQL-Singup.png", title: "Page d’inscription (Sign Up) dans SQL Miroir" },
        { url: "/assets/SQL-Login.png", title: "Page de connexion (Login) dans SQL Miroir" },
        { url: "/assets/SQL-DataBase.png", title: "Affichage des bases de données simulées à partir des métadonnées" },
        { url: "/assets/SQL-Table.png", title: "Affichage des tables simulées à partir des métadonnées" },
        { url: "/assets/SQL-Attribute.png", title: "Affichage des attributes simulées à partir des métadonnées" },
        { url: "/assets/SQL-Value.png", title: "Affichage des valeurs simulées à partir des métadonnées" },
        { url: "/assets/SQL-PrimaryKey.png", title: "Affichage des primary key simulées à partir des métadonnées" },
        { url: "/assets/SQL-ForiegnKey.png", title: "Affichage des foriegn key simulées à partir des métadonnées" }
      ]
    },
    "mehneti": {
      title: "Mehneti.dz",
      subtitle: "Plateforme Intelligente de Recrutement en Algérie",
      category: "Full-Stack Platform",
      duration: "5 mois",
      team: "2 Chefs de projet (développeurs)",
      year: "2025",
      logo: "/assets/Mihneti-logo.png",
      availableForWork: false,
      description: "Mehneti.dz est une plateforme web complète qui connecte les chercheurs d'emploi et les employeurs en Algérie. En tant que chef de projet et développeur principal, j'ai conçu et développé cette solution innovante qui révolutionne le processus de recrutement.",
      context: "Cette plateforme utilise des algorithmes de matching intelligent pour connecter les candidats avec les opportunités les plus pertinentes. Elle offre une expérience utilisateur fluide avec des fonctionnalités de chat en temps réel, de gestion de profils avancée et d'analytiques détaillées.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Redux", "JWT", "Stripe"],
      features: [
        "Système de matching intelligent candidat-employeur",
        "Chat en temps réel avec Socket.io",
        "Gestion complète des profils utilisateurs",
        "Tableau de bord analytique pour employeurs et demandeurs et admins",
        "Système de notifications push",
        "Upload et gestion de CV",
        "Filtres de recherche avancés",
        "Système de recommandations personnalisé"
      ],
      challenges: [
        "Algorithme de matching basé sur compétences et localisation",
        "Architecture scalable pour gérer des milliers d'utilisateurs",
        "Implémentation du chat temps réel performant",
        "Sécurisation des données sensibles des utilisateurs"
      ],
      outcomes: [
        "Lancement prometteur avec une forte croissance d’utilisateurs",
        "Premiers partenariats établis avec des entreprises locales",
        "Amélioration réelle du processus de recrutement en ligne",
        "Adoptée par les jeunes chercheurs d’emploi en Algérie"
      ],
      githubUrl: "https://github.com/ALLALI-Fadoua/Mihneti",
      url: "www.mihneti.online",
      heroImage: "/assets/Mihneti-Home.png",
      heroColor: "from-blue-900/90 to-indigo-900/90",
      galleryImages: [
        { url: "/assets/Mihneti-Dash-Admin.png", title: "Dashboard Admin" },
        { url: "/assets/Mihneti-Dash-Company.png", title: "Dashboard Recreteur" },
        { url: "/assets/Mihneti-Dash-Applicant.png", title: "Dashboard Demandeur d'Emploi" },
        { url: "/assets/Mihneti-chat.png", title: "Chat en temps réel" },
        { url: "/assets/Mihneti-ListeOffres.png", title: "Liste des Offres d'Emploi" },
        { url: "/assets/Mihneti-CVFormat.png", title: "Génération de CV multi-formats" },
        { url: "/assets/Mihneti-Candidature.png", title: "Candidature avec sélection obligatoire d'un CV" },
        { url: "/assets/Mihneti-ListeCandidature.png", title: "Liste des Candidatures" },
        { url: "/assets/Mihneti-DetailInterviews.png", title: "Génération de CV multi-formats" }
      ]
    },
    "portfolio": {
      title: "Portfolio Website",
      subtitle: "Site Portfolio Moderne et Responsive",
      category: "Web Design",
      duration: "1 semaine",
      team: "Solo",
      year: "2025",
      logo: "/assets/Portfolio-Logo.png",
      availableForWork: true,
      description: "Un site portfolio personnel avec un design moderne, mode sombre, et des interfaces fluides. Conçu pour présenter mes compétences et projets de manière élégante et professionnelle.",
      context: "Ce portfolio démontre ma maîtrise des dernières technologies web et des principes de design moderne. Il offre une expérience utilisateur exceptionnelle, une navigation fluide et un design responsive qui s'adapte parfaitement à tous les appareils.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "React Router"],
      features: [
        "Design responsive pour tous les appareils",
        "Mode sombre/clair avec transition fluide",
        "Formulaire de contact fonctionnel",
        "Navigation fluide entre sections",
        "Performance optimisée",
        "Chargement ultra-rapide"
      ],
      challenges: [
        "Gestion de la responsivité sur plusieurs appareils",
        "Création d’un système de navigation intuitif et minimaliste",
        "Maintien d’un design cohérent entre le mode clair et sombre",
        "Utilisation de technologies modernes sans compromettre les performances",
        "Personnalisation du portfolio pour refléter l’identité du développeur"
      ],
      outcomes: [
        "Expérience utilisateur fluide et immersive",
        "Temps de chargement < 1 seconde",
        "Navigation fluide avec transitions",
        "Mise en ligne et hébergement sans erreurs sur Vercel"
      ],
      githubUrl: "https://github.com/ALLALI-Fadoua/Portfolio",
      url: "https://my-portfolio-alfa.vercel.app/",
      heroImage: "/assets/Portfolio-Home.png",
      heroColor: "from-purple-900/90 to-indigo-900/90",
      galleryImages: [
        
        { url: "/assets/Portfolio-Clair.png", title: "Page principale du Portfolio en mode clair" },
        { url: "/assets/Portfolio-Parcours.png", title: "À propos de moi" },
        { url: "/assets/Portfolio-Skills.png", title: "Mes Compétences" },
        { url: "/assets/Portfolio-Projects.png", title: "Mes Projets" },
        { url: "/assets/Portfolio-Contact.png", title: "Contactez-moi" },
        { url: "/assets/Portfolio-Footer.png", title: "Pied de page (Footer) du Portfolio" }
      ]
    }
  };

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Projet non trouvé</h2>
          <Link to="/" className="text-orange-600 hover:text-orange-700 font-semibold">
            Retour aux projets
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
            <span className="text-sm font-medium">Retour aux projets</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 py-24 overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
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

              {/* Project Info */}
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

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-950 dark:border-orange-600 text-blue-950 dark:text-orange-600 rounded-lg hover:bg-blue-950 dark:hover:bg-orange-600 hover:text-white transition-all font-semibold"
                  >
                    <Github className="w-5 h-5" />
                    Code source
                  </a>
                )}
              </div>
            </div>

            {/* Right side - Logo Circle */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Circle with gradient border */}
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
                {/* Available badge - DYNAMIQUE */}
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
            Aperçu du projet
          </h2>
          
          {/* Main image */}
          {project.heroImage && (
            <div className="mb-6 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={project.heroImage} 
                alt={`${project.title} - Vue principale`}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Gallery grid */}
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
            )) || (
              // Placeholder images if no gallery provided
              <>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-950 rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 font-semibold">Dashboard</span>
                </div>
                <div className="h-64 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-950 rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 font-semibold">Features</span>
                </div>
                <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-950 rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 font-semibold">Mobile View</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-blue-950 dark:text-orange-600 mb-4">
                Présentation du projet
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

            {/* Features */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-blue-950 dark:text-orange-600">
                  Fonctionnalités principales
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

            {/* Challenges */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-blue-950 dark:text-orange-600">
                  Défis techniques
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

            {/* Results */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-blue-950 dark:text-orange-600">
                  Résultats obtenus
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

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Technologies */}
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

              {/* Project Info */}
              <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h3 className="font-bold text-blue-950 dark:text-orange-600 mb-4">
                  Informations
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Catégorie:</span>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{project.category}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Année:</span>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{project.year}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Durée:</span>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Équipe:</span>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">{project.team}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className={`bg-gradient-to-br ${project.heroColor} p-6 rounded-xl text-white`}>
                <h3 className="font-bold mb-2">Intéressé ?</h3>
                <p className="text-sm text-white/80 mb-4">
                  Découvrez comment je peux vous aider
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
                  Me contacter
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