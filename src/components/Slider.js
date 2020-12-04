import project_1 from "../images/project_1.png";
import project_2 from "../images/music_app_project.png";
//Styled Components
import styled from "styled-components";

// React
import { useState, useRef, useEffect } from "react";

import SliderImg from "../components/SliderImg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
// import { fadeAnim } from "../animation";

const Slider = ({ setworkFocus, projectIndex, setProjectIndex }) => {
  const sliderStyledRef = useRef(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === -1) {
      setCounter(0);
    }
    if (counter === 5) {
      setCounter(4);
    }
    sliderStyledRef.current.style.transform = `translateY(${counter * -365}px)`;
  }, [counter]);

  return (
    <SliderComp>
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
          setworkFocus={setworkFocus}
          src={project_2}
          setProjectIndex={setProjectIndex}
          projectNumber={0}
        />
        <SliderImg
          setworkFocus={setworkFocus}
          src={project_1}
          setProjectIndex={setProjectIndex}
          projectNumber={1}
        />
        <SliderImg src={project_1} className="no-id" />
        <SliderImg src={project_2} className="no-id" />
        <SliderImg src={project_1} className="firstclone" />
        {/* </SlideContainer> */}
      </SliderStyled>
    </SliderComp>
  );
};

const SliderComp = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 56.4rem;
  height: 33rem;
  /* border: solid 5px green; */
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
`;

// const SlideContainer = styled.div`
//   /* margin-top: 20rem; */
//   background-color: lightcoral;

//   height: 35rem;
//   transition: all 0.5s ease-in-out;
// `;

export default Slider;
