import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import css from './AchievementsVisualization.module.scss';

const AchievementsVisualization = () => {
  const [animationProgress, setAnimationProgress] = useState(0);

  const achievements = [
    {
      title: "CodeForces Rating",
      value: 1271,
      maxValue: 1500,
      color: "#ff6b6b",
      icon: "⚡",
      description: "Max Rating - Competitive Programming"
    },
    {
      title: "LeetCode Rating",
      value: 1891,
      maxValue: 2000,
      color: "#4ecdc4",
      icon: "🧠",
      description: "Problem Solving Excellence"
    },
    {
      title: "JEE Main Percentile",
      value: 98,
      maxValue: 100,
      color: "#45b7d1",
      icon: "🎯",
      description: "Top 2% Nationally"
    },
    {
      title: "GitHub Projects",
      value: 40,
      maxValue: 50,
      color: "#96ceb4",
      icon: "💻",
      description: "40+ Projects, 5+ Live Apps"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationProgress(1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const CircularProgress = ({ achievement, index }) => {
    const percentage = (achievement.value / achievement.maxValue) * 100;
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <motion.div
        className={css.achievementCard}
        initial={{ opacity: 0, y: 50, rotateY: -90 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
        whileHover={{ 
          scale: 1.05, 
          rotateY: 10,
          boxShadow: `0 20px 40px ${achievement.color}40`
        }}
      >
        <div className={css.cardHeader}>
          <span className={css.icon}>{achievement.icon}</span>
          <h3>{achievement.title}</h3>
        </div>
        
        <div className={css.progressContainer}>
          <svg className={css.progressSvg} width="120" height="120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              stroke="#2a2a2a"
              strokeWidth="8"
              fill="transparent"
              className={css.backgroundCircle}
            />
            
            {/* Progress circle */}
            <motion.circle
              cx="60"
              cy="60"
              r="45"
              stroke={achievement.color}
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              initial={{ strokeDashoffset: circumference }}
              animate={{ 
                strokeDashoffset: animationProgress ? strokeDashoffset : circumference 
              }}
              transition={{ duration: 2, delay: index * 0.3 }}
              className={css.progressCircle}
            />
            
            {/* Neural network dots */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              const x = 60 + 35 * Math.cos(angle);
              const y = 60 + 35 * Math.sin(angle);
              
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="2"
                  fill={achievement.color}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ delay: index * 0.3 + i * 0.1 }}
                  className={css.neuralDot}
                />
              );
            })}
          </svg>
          
          <div className={css.valueDisplay}>
            <motion.span
              className={css.value}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.3 + 0.5, type: "spring" }}
            >
              {achievement.value}
            </motion.span>
            <span className={css.maxValue}>/{achievement.maxValue}</span>
          </div>
        </div>
        
        <p className={css.description}>{achievement.description}</p>
        
        {/* Floating particles */}
        <div className={css.particles}>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={css.particle}
              style={{ backgroundColor: achievement.color }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      className={css.achievementsSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={css.sectionHeader}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={css.title}>
          <span className={css.glitch} data-text="ACHIEVEMENTS">ACHIEVEMENTS</span>
        </h2>
        <p className={css.subtitle}>Data-Driven Excellence in Competitive Programming & Development</p>
      </motion.div>

      <div className={css.achievementsGrid}>
        {achievements.map((achievement, index) => (
          <CircularProgress 
            key={achievement.title} 
            achievement={achievement} 
            index={index} 
          />
        ))}
      </div>

      {/* Neural connections between cards */}
      <svg className={css.connectionsOverlay}>
        {achievements.map((_, index) => {
          if (index < achievements.length - 1) {
            return (
              <motion.line
                key={index}
                x1={`${(index + 1) * 25}%`}
                y1="50%"
                x2={`${(index + 2) * 25}%`}
                y2="50%"
                stroke="url(#neuralGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ delay: index * 0.5 + 1, duration: 1 }}
              />
            );
          }
          return null;
        })}
        
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#00ff88", stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: "#667eea", stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: "#00ff88", stopOpacity: 0.8 }} />
          </linearGradient>
        </defs>
      </svg>
    </motion.section>
  );
};

export default AchievementsVisualization;