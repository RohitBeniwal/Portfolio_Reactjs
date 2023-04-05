import React from 'react'
import css from './Footer.module.scss'
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from '../../utils/motion';
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {BsGithub} from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'


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
            <div className={`flexCenter ${css.socials}`}>
            <a href="https://www.linkedin.com/in/rohit-beniwal-516748224/" target="_blank"><SiLinkedin size={"40px"} color='blue'/></a>
            <a href="https://www.linkedin.com/in/rohit-beniwal-516748224/" target="_blank"><BsGithub size={"40px"} color='black'/></a>
            </div>

            <div className={`flexCenter ${css.menu}`}>
                <a href='#experties'>Services</a>
                <a href='#work'>Experience</a>
                <a href='#portfolio'>Portfolio</a>
            </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Footer