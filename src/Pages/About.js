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

      <TopContainer>
        <BgImg variants={imgWorkAnim} src={moutainDayImg} alt="moutains" />
      </TopContainer>
      <BottomContainer></BottomContainer>
    </AboutStyled>
  );
};

const AboutStyled = styled(motion.div)`
  min-height: 200vh;
`;

const TopContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  background: linear-gradient(180deg, #488db4 0%, #bbe9fa 100%);
  position: relative;
  z-index: 15;
`;
const BottomContainer = styled.div`
  width: 100%;
  height: 150vh;
  background: #091219;
`;

const BgImg = styled(motion.img)`
  position: absolute;
  left: -1%;
  bottom: 50%;
  max-width: 110%;
  pointer-events: none;
  z-index: 20;
`;

export default About;
