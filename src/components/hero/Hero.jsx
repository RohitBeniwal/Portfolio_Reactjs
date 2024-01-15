import React from "react";
import css from "./Hero.module.scss";
import {motion} from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false,amount:0.25}}
       className={`innerWidth ${css.container}`}>
        {/* upperelements */}
        <div className={css.upperElements}>
          <motion.span
          variants={fadeIn("right","tween",0.2,1)}
          className="primaryText">
            Hey There
            
          </motion.span>
          <motion.span
          variants={fadeIn("left","tween",0.4,1)}
          className="primaryText">
            I'm Rohit Beniwal
          </motion.span>
        </div>

      {/* person image */}
      <motion.div
      variants={fadeIn("up","tween",0.3,1)}
      className={css.person}>
        <motion.img
       variants={slideIn("up","tween",0.5,1.3)} 
        src="./person.png" alt="" />
      </motion.div>

      {/* email */}
      {/* <a className={css.email} href="mailto:211230047@nitdelhi.ac.in">
        211230047@nitdelhi.ac.in
      </a> */}

        {/* lowerelements */}
        <div className={css.lowerElements}>
          <motion.div
          variants={fadeIn("right","tween",0.3,1)}
          className={css.projects}>
            <div className="primaryText">25+</div>
            <div className="secondaryText">
              <div>Web Development</div>
              <div>Projects</div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn("left","tween",0.5,1)}
          className={css.title}>
            <img src="./vite.png" alt="" />
            <span> COMPETITIVE PROGRAMMER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
