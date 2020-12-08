//Styled Components
import styled from "styled-components";
//Images
import moutainImg from "../images/moutains-only-bg.png";
//Layout Styles
import { Layout, Hide } from "../Layout";
//Framer Motion
import { motion } from "framer-motion";
import {
  titleAnim,
  lineAnim,
  homepageAnim,
  sunFrontAnim,
  sunBackAnim,
  imgHomePageAnim,
  fadeAnim,
} from "../animation";
//Components
import Nav from "../components/Nav";
import Hamburger from "../components/Hamburger";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Homepage = ({ navStatus, setNavStatus, offsetX, offsetY }) => {
  return (
    <HomepageStyled
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
      <MoutainBg
        rel="preload"
        variants={imgHomePageAnim}
        src={moutainImg}
        alt=""
      />
      <Layout>
        <CircleFront
          style={{
            transform: `translate( ${-offsetX * 5}px, ${-offsetY * 5}px)`,
          }}
          variants={sunFrontAnim}
        />
        <CircleBack
          style={{
            transform: `translate( ${-offsetX * 5}px, ${-offsetY * 5}px)`,
          }}
          variants={sunBackAnim}
        />

        <Container navOpen={navStatus ? "25rem" : "0rem"}>
          <Hide>
            <Title variants={titleAnim}>
              Rayane <span>Bengaoui</span>
            </Title>
          </Hide>
          <Line variants={lineAnim} />
          <Hide>
            <motion.h2 variants={titleAnim}>
              Front-end / Software engineer
            </motion.h2>
          </Hide>
          <Hide>
            <motion.div className="links" variants={titleAnim}>
              <motion.a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rayane-bengaoui/"
              >
                <FontAwesomeIcon size="5x" color="white" icon={faLinkedin} />
              </motion.a>
              <motion.a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/RayaneBengaoui"
              >
                <FontAwesomeIcon
                  size="5x"
                  color="white"
                  icon={faGithubSquare}
                />
              </motion.a>
            </motion.div>
          </Hide>
          <AnimateLink variants={fadeAnim}>
            <Link
              className="btnLink"
              onClick={() => setNavStatus(false)}
              to="/work"
            >
              Discover my work
              {/* <ButtonStyled variants={fadeAnim}>Discover my work</ButtonStyled> */}
            </Link>
          </AnimateLink>
        </Container>
      </Layout>
    </HomepageStyled>
  );
};

const HomepageStyled = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(180deg, #0a5364 0%, #368698 100%);
  z-index: 5;
  position: relative;
`;

const Title = styled(motion.h1)`
  padding-bottom: 1rem;
  user-select: none;
  @media (max-width: 650px) {
    font-size: 7rem;
  }
`;

const Line = styled(motion.div)`
  height: 1rem;
  width: 60%;
  background-color: #f3b659;
  margin-bottom: 2rem;
  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: 7rem;
  }
`;

const MoutainBg = styled(motion.img)`
  position: absolute;
  /* bottom: -20%; */
  z-index: -5;
  width: 100%;
  user-select: none;
  transition: all 0.5s ease-in-out;

  @media (max-width: 400px) {
    width: 220%;
  }
`;

const Container = styled.div`
  max-width: 70rem;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.5s ease-in-out;
  margin-left: ${(props) => props.navOpen};
  user-select: none;
  /* background-color: lightcoral; */

  @media (max-width: 1050px) {
    min-width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .links {
    margin-top: 2rem;
    @media (max-width: 1050px) {
      margin: 5rem 0rem;
    }
  }

  .links > * + * {
    margin-left: 3rem;
    margin-top: 5rem;
  }

  .btnLink {
    margin-top: 2rem;
    background-color: #f3b659;
    border-radius: 10px;
    width: 20%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
    font-weight: 700;
    transition: all ease 0.5s;

    @media (max-width: 1050px) {
      font-size: 3rem;
      height: 6rem;
      width: 100%;
      padding: 2rem;
    }
    &:hover {
      background: #d49f4e;
      color: white;
    }
    user-select: none;
  }
`;

const AnimateLink = styled(motion.div)``;

const ButtonStyled = styled(motion.button)`
  align-self: flex-start;
  background: #f3b659;
  margin-top: 2rem;
  &:hover {
    background: #d49f4e;
    color: white;
  }
  user-select: none;
`;

const CircleFront = styled(motion.div)`
  position: absolute;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background: #f3b659;
  z-index: -10;
`;

const CircleBack = styled(motion.div)`
  position: absolute;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background: #d68d64;
  z-index: -11;
`;

export default Homepage;
