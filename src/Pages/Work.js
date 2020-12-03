import { homepageAnim, imgWorkAnim } from "../animation";
import { motion } from "framer-motion";
import styled from "styled-components";
//Images
import moutainNightImg from "../images/night-moutain-bg.png";
//Components
import Nav from "../components/Nav";
import Hamburger from "../components/Hamburger";

const Work = ({ navStatus, setNavStatus }) => {
  return (
    <WorkStyled
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
      <ImgBg variants={imgWorkAnim} src={moutainNightImg} alt="" />
    </WorkStyled>
  );
};

const WorkStyled = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(180deg, #082843 0%, #99b0d0 100%);
  z-index: 5;
  position: relative;
`;

const ImgBg = styled(motion.img)`
  position: fixed;
  bottom: 20%;
  z-index: 0;
  width: 100%;
  pointer-events: none;

  @media (max-width: 1440px) {
    width: 125%;
  }
`;

export default Work;
