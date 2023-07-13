import React, { useRef, useState } from "react";
import css from './Header.module.scss'
import {BiMenuAltRight} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import {SiLinkedin,SiCodeforces,SiCodechef,SiGeeksforgeeks,SiLeetcode} from 'react-icons/si'
import {motion} from 'framer-motion'
import {getMenuStyles, headerVariants} from '../../utils/motion'
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const header = () => {

  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow= useHeaderShadow();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
    initial='hidden'
    whileInView='show'
    variants={headerVariants}
    viewport={{once:false,amount:0.25}}
    className={`bg-primary paddings ${css.wrapper}`}
    style={{boxShadow:headerShadow}}
    >
        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={css.name}>
                <img src="signature.png" alt="" />
            </div>
            <ul
            ref={menuRef}
            style={getMenuStyles(menuOpened)}
            className={`flexCenter ${css.menu}`}>
                <li><a href="#experties">Services</a></li>
                <li><a href="#work">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                
                <li className={`flexCenter ${css.phone}`}>
            <a href="https://github.com/RohitBeniwal" target="_blank"><BsGithub size={"40px"} color='black'/></a>
                   
                </li>
                <li className={`flexCenter ${css.phone}`}>
            <a href="https://codeforces.com/profile/Rohit_Beniwal" target="_blank"><SiCodeforces size={"40px"} color='red'/></a>
                   
                </li>
                <li className={`flexCenter ${css.phone}`}>
            <a href="https://www.codechef.com/users/rohit_beniwal" target="_blank"><SiCodechef size={"40px"} color='brown'/></a>
                   
                </li>
                <li className={`flexCenter ${css.phone}`}>
            <a href="https://auth.geeksforgeeks.org/user/beniwalrb177/" target="_blank"><SiGeeksforgeeks size={"40px"} color='green'/></a>
                   
                </li>
                <li className={`flexCenter ${css.phone}`}>
            <a href="https://leetcode.com/Rohit_Beniwal/" target="_blank"><SiLeetcode size={"40px"} color='yellow'/></a>
                   
                </li>
            </ul>

            {/* for medium and small screens */}
            <div className={css.menuIcon}
            onClick={() => setMenuOpened((prev) => !prev)}
            >

              <BiMenuAltRight size={30}/>
            </div>
        </div>
    </motion.div>
  )
}

export default header