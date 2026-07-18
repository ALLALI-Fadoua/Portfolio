export const fitora = {
  id: "fitora",
  title: "Fitora",
  subtitle: "Connect athletes with coaches through personalized sports coaching",
  category: "Sports Coaching Platform",
  duration: "1 month",
  team: "Solo",
  year: "2026",
  logo: "/assets/Fitora-logo.png",
  logoScale: 1,
  logoPadding: 0,
  availableForWork: true,

  description:
    "Fitora is a sports coaching platform that connects athletes with qualified coaches. It enables users to discover coaches, book coaching sessions, follow personalized training programs, track their progress, and achieve their fitness and sports goals through a dedicated digital experience.",

  context:
    "The platform is designed exclusively for the sports and fitness coaching industry. It provides dedicated spaces for coaches, athletes, and administrators, with features for managing training programs, coaching sessions, bookings, payments, progress tracking, sports goals, achievements, and performance analytics — all within a sleek dark-mode interface optimized for Arabic (RTL).",

  technologies: ["React", "Tailwind CSS", "Lucide React", "React Router"],

  features: [
    "Coach Space: session and training program management",
    "Athlete Space: bookings, payments, reviews, and progress tracking",
    "Personalized sports training programs",
    "Interactive calendar for coaching sessions and events",
    "Sports goals, achievements, and performance tracking",
    "Complete earnings and commission dashboard for coaches",
    "Notification center with read/unread management",
    "PDF export for earnings transactions",
    "Mock data architecture ready for backend integration"
  ],

  challenges: [
    "Designing three independent role-based spaces with a shared layout system",
    "Building a fully interactive Arabic RTL interface with a smooth dark-mode experience",
    "Creating a dynamic calendar for managing coaching sessions and training activities",
    "Structuring personalized sports training programs with modules, exercises, and progress tracking",
    "Managing state and CRUD operations entirely on the frontend with mock data"
  ],

  outcomes: [
    "Complete multi-role sports coaching platform UI fully functional with mock data",
    "Coach dashboard with calendar, earnings chart, and commission breakdown",
    "Athlete dashboard with activity tracking, sports goals, progress, and achievements",
    "Training program builder for creating personalized sports programs",
    "Clean, scalable architecture ready for real backend integration"
  ],

  githubUrl: "https://github.com/ALLALI-Fadoua/Fitora",
  url: "https://fiitora.netlify.app/",

  heroImage: "/assets/Fitora-Home.png",
  heroColor: "from-amber-900/90 to-orange-900/90",

  galleryImages: [
    { url: "/assets/Fitora-CoachDashboard.png", title: "Coach Dashboard — Calendar & Stats" },
    { url: "/assets/Fitora-LearnerDashboard.png", title: "Athlete Dashboard — Activity & Progress" },
    { url: "/assets/Fitora-AdminDashboard.png", title: "Admin Dashboard — Platform Management" },
    { url: "/assets/Fitora-CoachCourses.png", title: "Sports Training Program Builder" },
    { url: "/assets/Fitora-LearnerBookings.png", title: "Bookings History" },
    { url: "/assets/Fitora-AdminCategories.png", title: "Platform Categories" },
    { url: "/assets/Fitora-CoachReview.png", title: "Coach Reviews & Ratings" },
    { url: "/assets/Fitora-LearnerNotifications.png", title: "Special Notifications for Athletes" },
    { url: "/assets/Fitora-AdminSettings.png", title: "Platform Settings" }
  ]
};