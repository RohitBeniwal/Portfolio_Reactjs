import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import css from './CustomCursor.module.scss';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const trailRefs = useRef([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className={css.cursor}
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className={css.cursorInner}>
          <div className={css.neuralNode}></div>
        </div>
      </motion.div>

      {/* AI Neural Trail */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={css.trail}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            opacity: 0.8 - (i * 0.1)
          }}
          transition={{
            delay: i * 0.02,
            type: 'spring',
            stiffness: 200,
            damping: 20
          }}
        />
      ))}

      {/* Floating particles around cursor */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={css.particle}
          animate={{
            x: mousePosition.x + Math.sin(Date.now() * 0.001 + i) * 30,
            y: mousePosition.y + Math.cos(Date.now() * 0.001 + i) * 30,
          }}
          transition={{ duration: 0.1 }}
        />
      ))}
    </>
  );
};

export default CustomCursor;