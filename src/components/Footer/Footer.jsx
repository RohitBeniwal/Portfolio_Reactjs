import React from 'react'
import css from './Footer.module.scss'
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from '../../utils/motion';

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial='hidden'
    whileInView='show'
    viewport={{once:false,amount:0.25}}
    className={`paddings ${css.wrapper}`}>
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
            <span className="primaryText">
                Let's build something <br/> unique together...
            </span>
            <span className="primaryText">
            <a href="mailto:211230047@nitdelhi.ac.in">Contact Me</a>
            </span>
        </div>

        <div className={css.right}>
            {/* <div className={css.socials}>
                <span className="secondaryText"></span>
            </div> */}

            <div className={css.menu}>
                <li>Services</li>
                <li>Work</li>
                <li>Experience</li>
            </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Footer