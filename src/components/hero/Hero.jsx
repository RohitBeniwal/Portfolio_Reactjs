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
            Application Engineer
          </motion.span>
          <motion.span
          variants={fadeIn("left","tween",0.4,1)}
          className="primaryText">
            @ BlackRock | AI/ML Enthusiast
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
              <span className={css.terminalTitle}>~/BlackRock-intern</span>
            </div>
            <div className={css.terminalBody}>
              <motion.div 
                className={css.codeLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <span className={css.prompt}>$</span>
                <span className={css.command}>const engineer = {`{`}</span>
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
                <span className={css.indent}>  role: "Application Engineer @ BlackRock",</span>
              </motion.div>
              <motion.div 
                className={css.codeLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <span className={css.indent}>  expertise: ["Python ETL", "PyTorch", "React"],</span>
              </motion.div>
              <motion.div 
                className={css.codeLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <span className={css.indent}>  achievement: "Top 2% JEE Main 2021",</span>
              </motion.div>
              <motion.div 
                className={css.codeLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <span className={css.indent}>  focus: "AI/ML & Competitive Programming"</span>
              </motion.div>
              <motion.div 
                className={css.codeLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
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
              ⚡
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
              🧠
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
              🚀
            </motion.div>
            <motion.div 
              className={`${css.floatingIcon} ${css.icon4}`}
              animate={{ 
                y: [5, -15, 5],
                rotate: [0, -8, 8, 0]
              }}
              transition={{ 
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              🏆
            </motion.div>
          </div>

          {/* Experience badges */}
          <div className={css.experienceBadges}>
            <motion.div 
              className={css.badge}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2, duration: 1, type: "spring" }}
            >
              <span className={css.badgeIcon}>🏢</span>
              <span className={css.badgeText}>BlackRock</span>
            </motion.div>
            <motion.div 
              className={css.badge}
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2.3, duration: 1, type: "spring" }}
            >
              <span className={css.badgeIcon}>🎓</span>
              <span className={css.badgeText}>NIT Delhi</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

        {/* lowerelements */}
        <div className={css.lowerElements}>
          <motion.div
          variants={fadeIn("right","tween",0.3,1)}
          className={css.projects}>
            <div className="primaryText">40+</div>
            <div className="secondaryText">
              <div>Projects Including</div>
              <div>5+ Live Apps</div>
            </div>
          </motion.div>
          
          <motion.div
          variants={fadeIn("up","tween",0.5,1)}
          className={css.achievements}>
            <div className={css.achievementItem}>
              <span className={css.achievementNumber}>1271</span>
              <span className={css.achievementLabel}>CodeForces</span>
            </div>
            <div className={css.achievementItem}>
              <span className={css.achievementNumber}>1891</span>
              <span className={css.achievementLabel}>LeetCode</span>
            </div>
          </motion.div>
          
          <motion.div
          variants={fadeIn("left","tween",0.5,1)}
          className={css.title}>
            <div className={css.techStack}>
              <span className={css.tech}>PyTorch</span>
              <span className={css.tech}>React</span>
              <span className={css.tech}>Python</span>
            </div>
            <span className={css.roleTitle}>AI/ML Engineer & Full Stack Developer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
