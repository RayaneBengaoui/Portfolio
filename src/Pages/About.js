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
      <BottomContainer>
        <FirstSection>
          <LeftSectionContainer>
            <Numero color="white">01</Numero>
            <TitleContainer>
              <Title>- WHO AM I -</Title>
            </TitleContainer>
          </LeftSectionContainer>
          <RightSectionContainer></RightSectionContainer>
        </FirstSection>
        <SecondSection>
          <LeftSectionContainer>
            <Numero color="white">02</Numero>
            <TitleContainer>
              <Title>- PASSIONS -</Title>
            </TitleContainer>
          </LeftSectionContainer>
          <RightSectionContainer></RightSectionContainer>
        </SecondSection>
        <ThirdSection>
          <LeftSectionContainer>
            <Numero color=" #091219">03</Numero>
            <TitleContainer>
              <Title color=" #091219">- SKILLS -</Title>
            </TitleContainer>
          </LeftSectionContainer>
          <RightSectionContainer></RightSectionContainer>{" "}
        </ThirdSection>
      </BottomContainer>
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
  /* background: #091219; */
  background: white;
`;
const FirstSection = styled.div`
  width: 100%;
  height: 50vh;
  background: #091219;
  border-bottom: 5px solid white;
  display: flex;
`;
const SecondSection = styled.div`
  width: 100%;
  height: 50vh;
  background: #091219;
  display: flex;
`;
const ThirdSection = styled.div`
  width: 100%;
  height: 50vh;
  background: white;
  display: flex;
`;

const LeftSectionContainer = styled.div`
  width: 40%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;

const Numero = styled.p`
  font-size: 12rem;
  color: ${(props) => props.color};
  position: relative;
  margin-left: 5rem;
  font-family: "Montserrat", sans-serif;

  &::before {
    content: "";
    width: 110%;
    height: 5px;
    background-color: ${(props) => props.color};
    position: absolute;
    top: 50%;

    left: -100%;
  }
`;

const TitleContainer = styled.div`
  width: 60%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 7rem;
  font-weight: 300;
  color: ${(props) => props.color};
`;
const RightSectionContainer = styled.div`
  width: 60%;
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
