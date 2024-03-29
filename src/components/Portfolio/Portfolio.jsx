import React from 'react'
import css from './Portfolio.module.scss'
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from '../../utils/motion'

const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial='hidden'
    whileInView='show'
    viewport={{once:false,amount:0.25}}
    className={`paddings ${css.wrapper}`}>
        <a className="anchor" id="portfolio"></a>
        <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
            <div>
                <span className='primaryText'>My Latest Works</span>
                <p style={{marginTop:'10px'}}>Based on latest tech & frameworks</p>
            </div>
            <a href='https://github.com/RohitBeniwal' target='_blank' className="secondaryText">Explore More Works</a>
        </div>

        {/* images */}
        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://rosoiride.vercel.app/" target='_blank'><motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" /></a>
          <a href="https://nitdelhi.ac.in/SCIE/" target='_blank'><motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" /></a>
          <a href="https://memehub47.netlify.app/" target='_blank'><motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" /></a>
        
        </div>
        </div>
    </motion.section>
  )
}

export default Portfolio