import React from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../../contexts/ThemeContext';
import css from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      className={css.themeToggle}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={css.iconContainer}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDark ? (
          <HiMoon className={css.icon} />
        ) : (
          <HiSun className={css.icon} />
        )}
      </motion.div>
      <span className={css.tooltip}>
        Switch to {isDark ? 'light' : 'dark'} theme
      </span>
    </motion.button>
  );
};

export default ThemeToggle;