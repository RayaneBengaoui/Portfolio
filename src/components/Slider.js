import project_1 from "../images/project_1.png";
import project_2 from "../images/project_2.png";
//Styled Components
import styled from "styled-components";

// React
import { useState } from "react";
import { useRef } from "react";

import SliderImg from "../components/SliderImg";

const Slider = () => {
  let counterSlide = 0;
  const sliderStyledRef = useRef(null);

  const sliderHandler = (direction) => {
    if (direction === "top") {
      counterSlide++;
    } else {
      counterSlide--;
    }
    if (counterSlide === -1) {
      counterSlide = 0;
    }
    if (counterSlide === 5) {
      counterSlide = 4;
    }

    sliderStyledRef.current.style.transform = `translateY(${
      counterSlide * -365
    }px)`;
  };

  return (
    <SliderComp>
      <ButtonContainer>
        <ButtonStyled onClick={() => sliderHandler("top")}>Top</ButtonStyled>
        <ButtonStyled onClick={() => sliderHandler("bottom")}>
          Down
        </ButtonStyled>
      </ButtonContainer>
      <SliderStyled ref={sliderStyledRef}>
        {/* transitionned onClick={() => SliderHandler()} */}

        {/* <SlideContainer  */}
        <SliderImg src={project_2} className="lastclone" />
        <SliderImg src={project_1} className="no-id" />
        <SliderImg src={project_1} className="no-id" />
        <SliderImg src={project_2} className="no-id" />
        <SliderImg src={project_1} className="firstclone" />
        {/* </SlideContainer> */}
      </SliderStyled>
    </SliderComp>
  );
};

const SliderComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const ButtonStyled = styled.button`
  align-self: center;
  margin-right: 2rem;
  margin-top: 2rem;
  /* position: absolute;
  bottom: 0;
  left: -30%; */
`;

// const SlideContainer = styled.div`
//   /* margin-top: 20rem; */
//   background-color: lightcoral;

//   height: 35rem;
//   transition: all 0.5s ease-in-out;
// `;

export default Slider;
