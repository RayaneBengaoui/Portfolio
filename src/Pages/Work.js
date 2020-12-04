import { homepageAnim, imgWorkAnim, moonAnim, sliderAnim } from "../animation";
import { motion } from "framer-motion";
import styled from "styled-components";
//Images
import moutainNightImg from "../images/night-moutain-bg.png";
import moon from "../images/moon.png";
//Components
import Nav from "../components/Nav";
import Hamburger from "../components/Hamburger";
import Slider from "../components/Slider";
import WorkDetail from "../components/WorkDetail";
import Star from "../components/Star";
// React
import { useState, useEffect } from "react";

import { projectData } from "../projectData";

//Layout Styles
import { Hide } from "../Layout";

const Work = ({ navStatus, setNavStatus, offsetX, offsetY }) => {
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
      <Moon
        variants={moonAnim}
        src={moon}
        alt="moon"
        style={{
          transform: `translate( ${-offsetX * 5}px, ${-offsetY * 5}px)`,
        }}
      />
      <Hide>
        <SliderContainer
          variants={sliderAnim}
          navOpen={navStatus ? "25rem" : "0rem"}
        >
          <Slider
            projectIndex={projectIndex}
            setProjectIndex={setProjectIndex}
            setworkFocus={setworkFocus}
          />
        </SliderContainer>
      </Hide>
      <Star
        top="10%"
        left="10%"
        offsetX={offsetX}
        offsetY={offsetY}
        speed={2}
      />
      <Star
        top="30%"
        left="15%"
        offsetX={offsetX}
        offsetY={offsetY}
        speed={3}
      />
      <Star
        top="10%"
        left="50%"
        offsetX={offsetX}
        offsetY={offsetY}
        speed={1}
      />
      <Star
        top="40%"
        left="90%"
        offsetX={offsetX}
        offsetY={offsetY}
        speed={2}
      />
      <Star
        top="50%"
        left="25%"
        offsetX={offsetX}
        offsetY={offsetY}
        speed={6}
      />
      <Star top="55%" left="5%" offsetX={offsetX} offsetY={offsetY} speed={6} />
      <Star
        top="30%"
        left="60%"
        offsetX={offsetX}
        offsetY={offsetY}
        speed={0.5}
      />
      <Star
        top="60%"
        left="70%"
        offsetX={offsetX}
        offsetY={offsetY}
        speed={2}
      />
      <Star
        top="42%"
        left="95%"
        offsetX={offsetX}
        offsetY={offsetY}
        speed={3}
      />
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

const SliderContainer = styled(motion.div)`
  max-width: 80rem;
  height: 40rem;
  margin: 0rem auto;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  margin-left: ${(props) => props.navOpen};
`;

const Moon = styled(motion.img)`
  position: absolute;
`;

export default Work;
