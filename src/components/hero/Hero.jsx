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

      {/* technical visualization */}
      <motion.div
      variants={fadeIn("up","tween",0.3,1)}
      className={css.techVisualization}>
        <motion.div
        variants={slideIn("up","tween",0.5,1.3)} 
        className={css.codeAnimation}>
          <div className={css.terminal}>
            <div className={css.terminalHeader}>
              <div className={css.terminalButtons}>
                <span className={css.red}></span>
                <span className={css.yellow}></span>
                <span className={css.green}></span>
              </div>
              <span className={css.terminalTitle}>~/portfolio</span>
            </div>
            <div className={css.terminalBody}>
              <motion.div 
                className={css.codeLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <span className={css.prompt}>$</span>
                <span className={css.command}>const developer = {`{`}</span>
              </motion.div>
              <motion.div 
                className={css.codeLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <span className={css.indent}>  name: "Rohit Beniwal",</span>
              </motion.div>
              <motion.div 
                className={css.codeLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                <span className={css.indent}>  skills: ["React", "Node.js", "Python"],</span>
              </motion.div>
              <motion.div 
                className={css.codeLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <span className={css.indent}>  passion: "Problem Solving"</span>
              </motion.div>
              <motion.div 
                className={css.codeLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <span className={css.command}>{`}`};</span>
              </motion.div>
            </div>
          </div>
          
          {/* Floating tech icons */}
          <div className={css.floatingElements}>
            <motion.div 
              className={`${css.floatingIcon} ${css.icon1}`}
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              &lt;/&gt;
            </motion.div>
            <motion.div 
              className={`${css.floatingIcon} ${css.icon2}`}
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              { }
            </motion.div>
            <motion.div 
              className={`${css.floatingIcon} ${css.icon3}`}
              animate={{ 
                y: [-5, 15, -5],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              λ
            </motion.div>
          </div>
        </motion.div>
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
