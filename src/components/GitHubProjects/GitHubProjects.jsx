import React, { useState } from 'react';
import { motion } from 'framer-motion';
import css from './GitHubProjects.module.scss';

const GitHubProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Vision Transformer",
      description: "PyTorch implementation from scratch achieving 97% accuracy on CIFAR-10",
      repo: "vision-transformer",
      category: "AI/ML",
      techStack: ["PyTorch", "Python", "NumPy", "Matplotlib"],
      color: "#ee4c2c",
      icon: "🧠",
      highlights: ["97% Accuracy", "From Scratch", "Research-Level"],
      difficulty: "Advanced"
    },
    {
      id: 2,
      name: "ShopBazaar MERN",
      description: "Full-stack e-commerce platform with real-time features and admin dashboard",
      repo: "ShopBazaar-MERN",
      category: "Full-Stack",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      color: "#61dafb",
      icon: "🛒",
      highlights: ["1000+ Products", "Real-time Updates", "Admin Panel"],
      difficulty: "Intermediate"
    },
    {
      id: 3,
      name: "Realtime Device Tracker",
      description: "Live location tracking with WebSocket integration and interactive maps",
      repo: "Realtime-Device-Tracker",
      category: "Real-time",
      techStack: ["Socket.io", "Express", "Leaflet", "WebSocket"],
      color: "#00ff88",
      icon: "📍",
      highlights: ["Live Tracking", "WebSocket", "Interactive Maps"],
      difficulty: "Advanced"
    },
    {
      id: 4,
      name: "Portfolio ReactJS",
      description: "This very portfolio - showcasing advanced 3D graphics and animations",
      repo: "Portfolio_Reactjs",
      category: "Portfolio",
      techStack: ["React", "Three.js", "Framer Motion", "SCSS"],
      color: "#667eea",
      icon: "🎨",
      highlights: ["3D Graphics", "Animations", "Responsive"],
      difficulty: "Advanced"
    },
    {
      id: 5,
      name: "Movies Recommender System",
      description: "ML-powered movie recommendation engine with collaborative filtering",
      repo: "Movies_Recommeder_System",
      category: "Machine Learning",
      techStack: ["Python", "Pandas", "Scikit-learn", "NumPy"],
      color: "#ff6b6b",
      icon: "🎬",
      highlights: ["ML Algorithm", "Collaborative Filtering", "Data Analysis"],
      difficulty: "Intermediate"
    },
    {
      id: 6,
      name: "Food App Frontend",
      description: "Modern food delivery app with sleek UI and smooth animations",
      repo: "food-app-frontend",
      category: "Frontend",
      techStack: ["React", "CSS3", "JavaScript", "API Integration"],
      color: "#ffa726",
      icon: "🍕",
      highlights: ["Modern UI", "Smooth UX", "API Integration"],
      difficulty: "Intermediate"
    },
    {
      id: 7,
      name: "Food App Backend",
      description: "Robust REST API with authentication and order management system",
      repo: "food-app-backend",
      category: "Backend",
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      color: "#4caf50",
      icon: "⚙️",
      highlights: ["REST API", "Authentication", "Order Management"],
      difficulty: "Intermediate"
    },
    {
      id: 8,
      name: "MemeHub",
      description: "Social platform for meme sharing with user interactions and voting",
      repo: "MemeHub",
      category: "Social Platform",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      color: "#9c27b0",
      icon: "😂",
      highlights: ["Social Features", "Real-time", "User Voting"],
      difficulty: "Intermediate"
    },
    {
      id: 9,
      name: "ODF GYM Website",
      description: "Professional gym website with membership management and booking system",
      repo: "ODF_GYM_Website",
      category: "Business",
      techStack: ["HTML5", "CSS3", "JavaScript", "PHP"],
      color: "#ff5722",
      icon: "💪",
      highlights: ["Booking System", "Membership", "Professional"],
      difficulty: "Beginner"
    },
    {
      id: 10,
      name: "SCIE NextJS",
      description: "Educational platform built with Next.js featuring SSR and optimized performance",
      repo: "SCIE-Nextjs-1",
      category: "Education",
      techStack: ["Next.js", "React", "SSR", "TailwindCSS"],
      color: "#00bcd4",
      icon: "📚",
      highlights: ["SSR", "Performance", "Education"],
      difficulty: "Advanced"
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const isHovered = hoveredProject === project.id;
    
    return (
      <motion.div
        className={css.projectCard}
        initial={{ opacity: 1, y: 0, rotateX: 0 }}
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          z: 50,
          boxShadow: `0 25px 50px ${project.color}40`
        }}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
        onClick={() => window.open(`https://github.com/rohitbeniwal/${project.repo}`, '_blank')}
      >
        <div className={css.cardGlow} style={{ backgroundColor: project.color }} />
        
        <div className={css.cardHeader}>
          <div className={css.projectIcon} style={{ color: project.color }}>
            {project.icon}
          </div>
          <div className={css.difficultyBadge} data-difficulty={project.difficulty}>
            {project.difficulty}
          </div>
        </div>

        <div className={css.cardContent}>
          <h3 className={css.projectName}>{project.name}</h3>
          <p className={css.projectDescription}>{project.description}</p>
          
          <div className={css.highlights}>
            {project.highlights.map((highlight, idx) => (
              <span key={idx} className={css.highlight} style={{ borderColor: project.color }}>
                {highlight}
              </span>
            ))}
          </div>

          <div className={css.techStack}>
            {project.techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                className={css.techBadge}
                initial={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div className={css.cardFooter}>
          <div className={css.category} style={{ color: project.color }}>
            {project.category}
          </div>
          <motion.div 
            className={css.githubLink}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={css.linkText}>View on GitHub</span>
            <span className={css.linkIcon}>→</span>
          </motion.div>
        </div>

        {/* Floating particles */}
        {isHovered && (
          <div className={css.particles}>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={css.particle}
                style={{ backgroundColor: project.color }}
                initial={{ opacity: 0.7, scale: 0.7 }}
                animate={{ 
                  x: Math.random() * 60 - 30,
                  y: Math.random() * 60 - 30
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        )}

        {/* Code pattern overlay */}
        <div className={css.codePattern}>
          <span>&lt;/&gt;</span>
          <span>{`{}`}</span>
          <span>λ</span>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      className={css.githubProjectsSection}
      initial={{ opacity: 1 }}
    >
      <motion.div
        className={css.sectionHeader}
        initial={{ opacity: 1 }}
      >
        <h2 className={css.title}>
          <span className={css.glitch} data-text="GITHUB PROJECTS">GITHUB PROJECTS</span>
        </h2>
        <p className={css.subtitle}>
          Explore my latest creations - From AI/ML to Full-Stack Applications
        </p>
        <div className={css.statsBar}>
          <div className={css.stat}>
            <span className={css.statNumber}>10+</span>
            <span className={css.statLabel}>Major Projects</span>
          </div>
          <div className={css.stat}>
            <span className={css.statNumber}>5+</span>
            <span className={css.statLabel}>Live Applications</span>
          </div>
          <div className={css.stat}>
            <span className={css.statNumber}>40+</span>
            <span className={css.statLabel}>Repositories</span>
          </div>
        </div>
      </motion.div>

      <div className={css.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <motion.div
        className={css.viewMoreSection}
        initial={{ opacity: 1 }}
      >
        <motion.a
          href="https://github.com/rohitbeniwal"
          target="_blank"
          rel="noopener noreferrer"
          className={css.viewMoreButton}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0, 255, 136, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={css.buttonText}>Explore All Projects</span>
          <span className={css.buttonIcon}>🚀</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default GitHubProjects;