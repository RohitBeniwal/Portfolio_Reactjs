import React from 'react'
import css from './Footer.module.scss'
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from '../../utils/motion';
import {BsGithub} from 'react-icons/bs'
import {SiLinkedin,SiCodeforces,SiCodechef,SiGeeksforgeeks,SiLeetcode} from 'react-icons/si'
import resume from '../../../public/Rohit-Beniwal_Resume.pdf';
import {HiDownload} from 'react-icons/hi';



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
            <a href="https://codeforces.com/profile/Rohit_Beniwal" target="_blank"><SiCodeforces size={"40px"} color='red'/></a>
            <a href="https://www.codechef.com/users/rohit_beniwal" target="_blank"><SiCodechef size={"40px"} color='brown'/></a>
            <a href="https://auth.geeksforgeeks.org/user/beniwalrb177/" target="_blank"><SiGeeksforgeeks size={"40px"} color='green'/></a>
            <a href="https://leetcode.com/Rohit_Beniwal/" target="_blank"><SiLeetcode size={"40px"} color='yellow'/></a>
            </div>

            <div className={`flexCenter ${css.menu}`}>
                <a href='#experties'>Services</a>
                <a href='#work'>Experience</a>
                <a href='#portfolio'>Portfolio</a>
            <a className={`${css.resume}`} href={resume} download="Resume">Resume{" "}{" "}<HiDownload/></a>

            </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Footer