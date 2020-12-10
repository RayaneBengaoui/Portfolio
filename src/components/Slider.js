import project_1 from "../images/project_1.png";
import project_2 from "../images/music_app_project.png";
import projectCapture from "../images/projectCapture.png";
import projectPhone from "../images/projectPhone.png";
import projectFleuriste from "../images/projectFleuriste.png";
import projectPhoton from "../images/projectPhoton.png";

//Styled Components
import styled from "styled-components";

// React
import { useState, useRef, useEffect } from "react";

import SliderImg from "../components/SliderImg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { fadeAnim } from "../animation";
// import { fadeAnim } from "../animation";

const Slider = ({ setworkFocus, projectIndex, setProjectIndex }) => {
  const sliderStyledRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [translate, setTranslate] = useState(-364);

  useEffect(() => {
    if (window.innerWidth >= 1750) {
      setTranslate(-364);
    } else {
      if (window.innerWidth <= 650) {
        setTranslate(-238);
      } else {
        setTranslate(-299);
      }
    }

    if (counter === -1) {
      setCounter(0);
    }
    if (counter === 6) {
      setCounter(5);
    }
    sliderStyledRef.current.style.transform = `translateY(${
      counter * translate
    }px)`;
  }, [counter, translate]);

  return (
    <SliderComp variants={fadeAnim}>
      <ButtonContainer>
        <FontIcon
          onClick={() => setCounter(counter + 1)}
          size="4x"
          color="white"
          icon={faChevronUp}
        />
        <FontIcon
          onClick={() => setCounter(counter - 1)}
          size="4x"
          color="white"
          icon={faChevronDown}
        />
        {/* <ButtonStyled onClick={() => sliderHandler("top")}>Top</ButtonStyled> */}
        {/* <ButtonStyled onClick={() => sliderHandler("bottom")}>
          Down
        </ButtonStyled> */}
      </ButtonContainer>
      <SliderStyled ref={sliderStyledRef}>
        {/* transitionned onClick={() => SliderHandler()} */}

        {/* <SlideContainer  */}
        <SliderImg
          src={project_2}
          setworkFocus={setworkFocus}
          setProjectIndex={setProjectIndex}
          projectNumber={0}
        />
        <SliderImg
          setworkFocus={setworkFocus}
          src={project_1}
          setProjectIndex={setProjectIndex}
          projectNumber={1}
        />
        <SliderImg
          src={projectCapture}
          setworkFocus={setworkFocus}
          setProjectIndex={setProjectIndex}
          projectNumber={2}
        />
        <SliderImg
          src={projectPhone}
          setworkFocus={setworkFocus}
          setProjectIndex={setProjectIndex}
          projectNumber={3}
        />
        <SliderImg
          src={projectFleuriste}
          setworkFocus={setworkFocus}
          setProjectIndex={setProjectIndex}
          projectNumber={4}
        />
        <SliderImg
          src={projectPhoton}
          setworkFocus={setworkFocus}
          setProjectIndex={setProjectIndex}
          projectNumber={5}
        />
        {/* </SlideContainer> */}
      </SliderStyled>
    </SliderComp>
  );
};

const SliderComp = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &::before {
    content: "Click on the project for details";
    font-size: 1.8rem;
    border-radius: 10px;
    font-weight: 700;
    padding: 0.9rem;
    background: black;
    color: white;
    position: absolute;
    top: 0;
    left: 40%;

    transform: scale(0);
    transition: transform ease-out 150ms, bottom ease-out 150ms;
    z-index: 100;
  }

  &:hover::before {
    transform: scale(1);
  }
`;

const SliderStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 56.4rem;
  height: 33rem;

  /* transform: translateY(-335px); */
  transition: all 0.5s ease-in-out;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FontIcon = styled(FontAwesomeIcon)`
  margin-right: 5rem;
  margin-bottom: 2rem;
  cursor: pointer;

  animation: scaleUp 2s ease-in-out infinite alternate;

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.3);
    }
  }
`;

// const SlideContainer = styled.div`
//   /* margin-top: 20rem; */
//   background-color: lightcoral;

//   height: 35rem;
//   transition: all 0.5s ease-in-out;
// `;

export default Slider;
