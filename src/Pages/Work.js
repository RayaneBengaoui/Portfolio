import { homepageAnim, imgWorkAnim } from "../animation";
import { motion } from "framer-motion";
import styled from "styled-components";
//Images
import moutainNightImg from "../images/night-moutain-bg.png";
//Components
import Nav from "../components/Nav";
import Hamburger from "../components/Hamburger";
import Slider from "../components/Slider";
import WorkDetail from "../components/WorkDetail";
// React
import { useState } from "react";

import { projectData } from "../projectData";

const Work = ({ navStatus, setNavStatus }) => {
  const [workFocus, setworkFocus] = useState(false);
  const [projects, setProjects] = useState(projectData);
  const [projectIndex, setProjectIndex] = useState(null);
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
      {workFocus && (
        <WorkDetail
          setworkFocus={setworkFocus}
          project={projects[projectIndex]}
        />
      )}
      <SliderContainer>
        <Slider
          projectIndex={projectIndex}
          setProjectIndex={setProjectIndex}
          setworkFocus={setworkFocus}
        />
      </SliderContainer>
    </WorkStyled>
  );
};

const WorkStyled = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(180deg, #082843 0%, #99b0d0 100%);
  /* z-index: 5; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBg = styled(motion.img)`
  position: fixed;
  bottom: 20%;
  z-index: 5;
  width: 100%;
  pointer-events: none;

  @media (max-width: 1440px) {
    width: 125%;
  }
`;

const SliderContainer = styled.div`
  max-width: 80rem;
  height: 36rem;
  margin: 0rem auto;

  padding: 2rem;
  /* border: solid 5px red; */
  position: relative;
  overflow: hidden;
`;

export default Work;
