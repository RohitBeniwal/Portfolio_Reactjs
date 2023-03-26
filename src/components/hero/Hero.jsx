import React from "react";
import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* upperelements */}
        <div className={css.upperElements}>
          <span>
            Hey There, <br />
            I'm Rohit Beniwal
          </span>
          <span>
            I love trying <br /> & learning new things everyday
          </span>
        </div>

        {/* lowerelements */}
        <div className={css.lowerElements}>
          <div className={css.projects}>
            <div className="primaryText">5+</div>
            <div className="secondaryText">
              <div>Web Development</div>
              <div>Projects</div>
            </div>
          </div>
          <div className={css.title}>
            <img src="./certificate.png" alt="" />
            <span>EXPERIENCED WEB DEVELOPER</span>
            <span>& COMPETITIVE PROGRAMMER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
