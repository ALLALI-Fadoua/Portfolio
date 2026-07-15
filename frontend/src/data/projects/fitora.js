export const fitora = {
  id: "fitora",
  title: "Fitora",
  subtitle: "Connect coaches and learners through sessions, programs, and certifications",
  category: "Client-side application",
  duration: "1 month",
  team: "Solo",
  year: "2026",
  logo: "/assets/Fitora-logo.png",
  availableForWork: true,
  description: "Fitora is a comprehensive coaching and training platform that connects learners with certified coaches. It offers dedicated dashboards for coaches, learners, and administrators, enabling seamless management of programs, progress tracking, and platform operations.",
  context: "The platform is built around a coaching model that covers self-development, digital marketing, entrepreneurship, programming, and finance. Each role has a fully tailored dashboard with real-time data, smart filtering, analytics, and an interactive calendar — all within a sleek dark-mode interface optimized for Arabic (RTL).",
  technologies: ["React", "Tailwind CSS", "Lucide React", "React Router"],
  features: [
    "Coach Space: session & program management",
    "Learner Space: bookings, payments & reviews",
    "Interactive calendar with event tracking",
    "Complete earnings & commission dashboard",
    "Multi-tab profile with sport goals & achievements",
    "Notification center with read/unread management",
    "PDF export for earnings transactions",
    "Mock data architecture ready for backend integration"
  ],
  challenges: [
    "Designing three independent role-based spaces with a shared layout system",
    "Building a fully interactive Arabic RTL interface with smooth dark-mode",
    "Implementing a dynamic calendar aggregating sessions and programs",
    "Structuring complex course forms with multi-module, multi-lesson, and final exam logic",
    "Managing state and CRUD operations entirely on the frontend with mock data"
  ],
  outcomes: [
    "Complete multi-role platform UI fully functional with mock data",
    "Coach dashboard with calendar, earnings chart and commission breakdown",
    "Learner dashboard with activity tracking, nutrition tracker and achievements",
    "Training program builder with modules, lessons, quizzes and certificates",
    "Clean, scalable architecture ready for real backend integration"
  ],
  githubUrl: "https://github.com/ALLALI-Fadoua/Fitora",
  url: "https://fiitora.netlify.app/",
  heroImage: "/assets/Fitora-Home.png",
  heroColor: "from-amber-900/90 to-orange-900/90",
  galleryImages: [
    { url: "/assets/Fitora-CoachDashboard.png",   title: "Coach Dashboard — Calendar & Stats" },
    { url: "/assets/Fitora-LearnerDashboard.png", title: "Learner Dashboard — Activity & Progress" },
    { url: "/assets/Fitora-AdminDashboard.png",    title: "Notification Center" },
    { url: "/assets/Fitora-CoachCourses.png",     title: "Training Programs Builder" },
    { url: "/assets/Fitora-LearnerPayments.png",  title: "Payment History" },
    { url: "/assets/Fitora-AdminEarnings.png",    title: "Notification Center" },
    { url: "/assets/Fitora-CoachEarnings.png",    title: "Earnings & Commission Dashboard" },
    { url: "/assets/Fitora-LearnerReviews.png",   title: "Reviews & Ratings" },
    { url: "/assets/Fitora-AdminCoachs.png",    title: "Notification Center" }
  ]
};