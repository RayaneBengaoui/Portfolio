//Components
import Nav from "../components/Nav";
import Hamburger from "../components/Hamburger";

import styled from "styled-components";

import moutainDayImg from "../images/fond_jour_crop.png";

import { homepageAnim, imgWorkAnim, moonAnim, sliderAnim } from "../animation";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

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
          <RightSectionContainer>
            <TextHolder>
              <h2>RAYANE BENGAOUI</h2>
              <h3>
                Born in 1997 in France and recently graduated from a French
                engineering school (UTT) with a diploma in Computer Science and
                Information Systems. During my studies I’ve done 2 internships
                as Project Manager Assistant and Data Scientist which teached me
                how to collaborate efficiently with my co-workers to deliver
                VALUE to clients within a defined period of time. Now I’m
                focusing on web development and specificaly on Front-end where
                I’m interested in Responsive Applications and Design.
              </h3>
            </TextHolder>
          </RightSectionContainer>
        </FirstSection>
        <SecondSection>
          <LeftSectionContainer>
            <Numero color="white">02</Numero>
            <TitleContainer>
              <Title>- PASSIONS -</Title>
            </TitleContainer>
          </LeftSectionContainer>
          <RightSectionContainer>
            <PassionContainer>
              <Passion>
                <IconContainer>
                  <FontAwesomeIcon size="5x" color="black" icon={faLanguage} />
                </IconContainer>
                <h4>LANGUAGES</h4>
                <p>
                  I love languages and I make sure that each day I dedicate 1h
                  of my time to study it. I’m fluent in French and C1 in
                  English, I’m intermediate in Korean which I’d like to take a
                  profecient test and I have notions in Spanish/German.
                </p>
              </Passion>
              <Passion>
                <IconContainer>
                  <FontAwesomeIcon
                    size="4x"
                    color="black"
                    icon={faPaintBrush}
                  />
                </IconContainer>
                <h4>DIGITAL PAINTING</h4>
                <p>
                  I have a huge interest in Digital Arts especially Digital
                  Painting. I learned Photoshop mainly through practicing it, in
                  the meantime it has sharpened my attention to details and
                  helped me to break down complicated forms into easiest chunks.
                  In my opinion it has a lot in common with
                  Structuring/Layouting when coding.
                </p>
              </Passion>
            </PassionContainer>
          </RightSectionContainer>
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
  padding: 6rem 8rem;
  z-index: 0;
`;

const TextHolder = styled.div`
  background-color: #1b3143;
  min-width: 70rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 4rem;
  position: relative;

  &::before {
    content: "";
    width: 4rem;
    height: 4rem;
    background: white;
    position: absolute;
    bottom: -1.5rem;
    left: -1.5rem;
  }
  &::after {
    content: "";
    width: 10rem;
    height: 10rem;
    background: white;
    position: absolute;
    right: -2rem;
    top: -2rem;
    z-index: -8;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.7rem;
    padding-bottom: 2rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.15rem;
    line-height: 3rem;
  }
`;

const PassionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
const Passion = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  h4 {
    font-size: 2rem;
    color: white;
    letter-spacing: 0.3rem;
    padding: 2rem 0rem;
    font-weight: 700;
  }

  p {
    max-width: 44rem;
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: 0.15rem;
    line-height: 3rem;
    text-align: center;
  }
`;

const IconContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 5rem;
  border-radius: 1rem;
`;

const BgImg = styled(motion.img)`
  position: absolute;
  left: 0%;
  bottom: 50%;
  min-width: 100%;
  pointer-events: none;
  z-index: 20;
`;

export default About;
