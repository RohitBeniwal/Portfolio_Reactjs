import React, { useState } from 'react'
import css from './Footer.module.scss'
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from '../../utils/motion';
import { BsGithub, BsArrowUp } from 'react-icons/bs'
import { SiLinkedin, SiCodeforces, SiLeetcode } from 'react-icons/si'
import { HiDownload, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaHeart } from 'react-icons/fa'
import resume from '../../../public/Rohit-Beniwal_Resume.pdf';



const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Show scroll to top button when scrolled down
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.section
    variants={staggerChildren}
    initial='hidden'
    whileInView='show'
    viewport={{once:false,amount:0.25}}
    className={`paddings ${css.wrapper}`}>
      {/* Scroll to top button */}
      <button 
        className={`${css.scrollTop} ${showScrollTop ? css.showScrollTop : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <BsArrowUp />
      </button>
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings ${css.container}`}>
        <div className={css.footerGrid}>
          {/* About section */}
          <div className={css.footerSection}>
            <h3 className={css.footerTitle}>About Me</h3>
            <p className={css.footerText}>
              Application Engineer passionate about building innovative solutions with modern technologies.
            </p>
            <div className={css.contactInfo}>
              <div className={css.contactItem}>
                <HiMail />
                <a href="mailto:211230047@nitdelhi.ac.in">211230047@nitdelhi.ac.in</a>
              </div>
              <div className={css.contactItem}>
                <HiLocationMarker />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div className={css.footerSection}>
            <h3 className={css.footerTitle}>Quick Links</h3>
            <div className={css.quickLinks}>
              <a href='#experties'>Services</a>
              <a href='#portfolio'>Portfolio</a>
              <a className={css.resume} href={resume} download="Resume">
                Resume <HiDownload/>
              </a>
            </div>
          </div>
          
          {/* Connect section */}
          <div className={css.footerSection}>
            <h3 className={css.footerTitle}>Connect</h3>
            <div className={css.socials}>
              <a href="https://www.linkedin.com/in/rohit-beniwal-516748224/" target="_blank" aria-label="LinkedIn">
                <SiLinkedin />
              </a>
              <a href="https://github.com/RohitBeniwal" target="_blank" aria-label="GitHub">
                <BsGithub />
              </a>
              <a href="https://codeforces.com/profile/Rohit_Beniwal" target="_blank" aria-label="Codeforces">
                <SiCodeforces />
              </a>
              <a href="https://leetcode.com/Rohit_Beniwal/" target="_blank" aria-label="LeetCode">
                <SiLeetcode />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className={css.copyright}>
          <p>
            © {currentYear} Rohit Beniwal. All rights reserved.
          </p>
          <p className={css.madeWith}>
            Made with <FaHeart className={css.heartIcon} /> using React
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Footer