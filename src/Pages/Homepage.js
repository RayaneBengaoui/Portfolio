//React Router
import { Link } from "react-router-dom";
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
  imgAnim,
  fadeAnim,
} from "../animation";

//Components
import Nav from "../components/Nav";
import Hamburger from "../components/Hamburger";

const Homepage = ({ navStatus, setNavStatus }) => {
  return (
    <HomepageStyled
      variants={homepageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Nav open={navStatus ? "translateX(0%)" : "translateX(-100%)"} />
      <Hamburger navStatus={navStatus} setNavStatus={setNavStatus} />
      <MoutainBg variants={imgAnim} src={moutainImg} alt="" />
      <Layout>
        <CircleFront variants={sunFrontAnim} />
        <CircleBack variants={sunBackAnim} />

        <Container navOpen={navStatus ? "25rem" : "0rem"}>
          <Hide>
            <Title variants={titleAnim}>
              Rayane <span>Bengaoui</span>
            </Title>
          </Hide>
          <Line variants={lineAnim} />
          <Hide>
            <motion.h2 variants={titleAnim}>
              Front-end engineer / Web designer
            </motion.h2>
          </Hide>
          <ButtonStyled variants={fadeAnim}>Discover my work</ButtonStyled>
        </Container>

        <Link to="/work">Next page</Link>
      </Layout>
    </HomepageStyled>
  );
};

const HomepageStyled = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(180deg, #0f4b5d 0%, #196172 100%);
  z-index: 5;
  position: relative;
`;

const Title = styled(motion.h1)`
  padding-bottom: 1rem;
`;

const Line = styled(motion.div)`
  height: 1rem;
  width: 60%;
  background-color: #f3b659;
  margin-bottom: 2rem;
`;

const MoutainBg = styled(motion.img)`
  position: fixed;
  bottom: -20%;
  z-index: -5;
  width: 100%;

  @media (max-width: 1440px) {
    width: 125%;
  }
`;

const Container = styled.div`
  max-width: 70rem;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.5s ease;
  margin-left: ${(props) => props.navOpen};
`;

const ButtonStyled = styled(motion.button)`
  align-self: flex-start;
  background-color: #f3b659;
  margin-top: 2rem;
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
