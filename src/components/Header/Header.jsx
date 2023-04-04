import React, { useRef, useState } from "react";
import css from './Header.module.scss'
import {BiMenuAltRight} from 'react-icons/bi'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
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
                Rohit Beniwal
            </div>
            <ul
            ref={menuRef}
            style={getMenuStyles(menuOpened)}
            className={`flexCenter ${css.menu}`}>
                <li><a href="#experties">Services</a></li>
                <li><a href="#work">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li className={`flexCenter ${css.phone}`}>
                  <a href="https://www.linkedin.com/in/rohit-beniwal-516748224/" target="_blank"><TiSocialLinkedinCircular size={"40px"}/></a>
                   
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