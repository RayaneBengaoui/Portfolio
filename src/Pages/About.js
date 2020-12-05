//Components
import Nav from "../components/Nav";
import Hamburger from "../components/Hamburger";

import styled from "styled-components";

import moutainDayImg from "../images/fond_jour_crop.png";

import { homepageAnim, imgWorkAnim, moonAnim, sliderAnim } from "../animation";
import { motion } from "framer-motion";

const About = ({ navStatus, setNavStatus, offsetX, offsetY }) => {
  return (
    <AboutStyled
      variants={homepageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Nav
        setNavStatus={setNavStatus}
        open={navStatus ? "translateX(0%)" : "translateX(-100%)"}
      />
      <Hamburger navStatus={navStatus} setNavStatus={setNavStatus} />
      <BgImg variants={imgWorkAnim} src={moutainDayImg} alt="moutains" />
    </AboutStyled>
  );
};

const AboutStyled = styled(motion.div)`
  min-height: 100vh;
  background: lightblue;
`;

const BgImg = styled(motion.img)`
  position: fixed;
  bottom: 20%;
  z-index: 5;
  width: 100%;
  pointer-events: none;
`;

export default About;
