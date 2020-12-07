//Components
import Nav from "../components/Nav";
import Hamburger from "../components/Hamburger";

import styled from "styled-components";

import moutainDayImg from "../images/fond_jour_crop.png";

import { homepageAnim, imgWorkAnim, moonAnim, sliderAnim } from "../animation";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faPaintBrush,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faReact,
  faGitSquare,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

import pythonIcon from "../images/python_icon.png";
import typeScriptIcon from "../images/ts_icon.png";
import ReduxIcon from "../images/redux_icon.png";
import jestIcon from "../images/jest_icon.png";
import framerIcon from "../images/framer_icon.png";
import styledIcon from "../images/styled_icon.png";
import psIcon from "../images/ps_icon.png";
import figmaIcon from "../images/figma_icon.png";
import officeIcon from "../images/office_icon.png";

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
              <Passion width="40%">
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
              <Passion width="60%">
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
          <RightSectionContainer>
            <SkillSection>
              <SkillContainer width="50%">
                <h4>CODING LANGUAGES</h4>
                <div className="break-flex">
                  <SkillLeftContainer>
                    <Skill>
                      <FontAwesomeIcon
                        size="4x"
                        color="#DD4B25"
                        icon={faHtml5}
                      />
                      <p>HTML</p>
                    </Skill>
                    <Skill>
                      <FontAwesomeIcon
                        size="4x"
                        color="#264DE4"
                        icon={faCss3Alt}
                      />
                      <p>CSS</p>
                    </Skill>
                    <Skill>
                      <FontAwesomeIcon
                        size="4x"
                        color="#C76494"
                        icon={faSass}
                      />
                      <p>SASS</p>
                    </Skill>
                    <Skill>
                      <FontAwesomeIcon size="4x" color="#EFD81D" icon={faJs} />
                      <p>JavaScript</p>
                    </Skill>
                  </SkillLeftContainer>
                  <SkillRightContainer>
                    <Skill>
                      <FontAwesomeIcon
                        size="4x"
                        color="black"
                        icon={faDatabase}
                      />
                      <p>SQL</p>
                    </Skill>
                    <Skill>
                      <img src={pythonIcon} alt="python programmation" />
                      <p>PYTHON</p>
                    </Skill>
                    <Skill>
                      <img
                        src={typeScriptIcon}
                        alt="typescript programmation"
                      />
                      <p>TypeScript</p>
                    </Skill>
                  </SkillRightContainer>
                </div>
              </SkillContainer>
              <SkillContainer width="25%">
                <h4>FRAMEWORKS/LIB</h4>
                <SkillLeftContainer>
                  <Skill>
                    <FontAwesomeIcon size="4x" color="#5ED3F3" icon={faReact} />
                    <p>REACT</p>
                  </Skill>
                  <Skill>
                    <img src={ReduxIcon} alt="Redux" />
                    <p>REDUX</p>
                  </Skill>
                  <Skill>
                    <img src={jestIcon} alt="jest testing" />
                    <p>JEST</p>
                  </Skill>
                  <Skill>
                    <img src={framerIcon} alt="framer-motion" />
                    <p>FRAMER MOTION</p>
                  </Skill>
                  <Skill>
                    <img src={styledIcon} alt="styled-components" />
                    <p>STYLED COMPONENTS</p>
                  </Skill>
                </SkillLeftContainer>
              </SkillContainer>
              <SkillContainer width="25%">
                <h4>TOOLS</h4>
                <SkillLeftContainer>
                  <Skill>
                    <FontAwesomeIcon
                      size="4x"
                      color="black"
                      icon={faGitSquare}
                    />
                    <p>GIT</p>
                  </Skill>
                  <Skill>
                    <FontAwesomeIcon size="4x" color="black" icon={faNpm} />
                    <p>NPM</p>
                  </Skill>
                  <Skill>
                    <img src={psIcon} alt="photoshop" />
                    <p>PHOTOSHOP</p>
                  </Skill>
                  <Skill>
                    <img src={figmaIcon} alt="figma" />
                    <p>FIGMA</p>
                  </Skill>
                  <Skill>
                    <img src={officeIcon} alt="microsoft office" />
                    <p>OFFICE</p>
                  </Skill>
                </SkillLeftContainer>
              </SkillContainer>
            </SkillSection>
          </RightSectionContainer>
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
  width: 35%;
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
  font-size: 6rem;
  font-weight: 300;
  color: ${(props) => props.color};
`;
const RightSectionContainer = styled.div`
  width: 65%;

  padding: 4rem 6rem;
  z-index: 0;
  position: relative;
`;

const TextHolder = styled.div`
  background-color: #1b3143;
  min-width: 70rem;
  height: 80%;
  margin: 4rem;
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
  /* width: 50%; */
  height: 100%;
  width: ${(props) => props.width};
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

const SkillSection = styled.div`
  display: flex;
  gap: 8rem;
`;

const SkillContainer = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */

  .break-flex {
    display: flex;
    height: 100%;
  }

  h4 {
    font-size: 2rem;
    color: #091219;
    letter-spacing: 0.3rem;
    padding-bottom: 1rem;
    margin-bottom: 3rem;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid #000;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.15rem;
    color: #091219;
  }
`;

const SkillLeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  margin-right: 4rem;

  width: 100%;
  height: 100%;
  img {
    width: 15%;
  }
`;

const SkillRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  img {
    width: 20%;
  }
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;

  p {
    padding-left: 2rem;
  }
`;

const BgImg = styled(motion.img)`
  position: absolute;
  left: 0%;
  bottom: 50%;
  width: 100%;
  pointer-events: none;
  z-index: 20;
`;

export default About;
