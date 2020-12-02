//React Router
// import { Link } from "react-router-dom";
//Styled Components
import styled from "styled-components";
//Images
import sunImg from "../images/sun.png";
import sunLightImg from "../images/sun-light.png";
import moonImg from "../images/moon.png";

const Nav = ({ open }) => {
  return (
    <NavStyled open={open}>
      <Section bg_color="#085567" rotate="rotateZ(40deg)">
        <Cover className="cover" />
        <SectionImage src={sunImg} alt="sun" />
        <h3>Homepage</h3>
        <SectionLine bg_color="#F3B659" />
      </Section>
      <Section
        className="middle-section"
        bg_color="#80a4b3"
        rotate="rotateZ(-40deg)"
      >
        <Cover className="cover" />
        <SectionImage src={sunLightImg} alt="sun light" />
        <h3>About me</h3>
        <SectionLine bg_color="#D9D2C3" />
      </Section>
      <Section bg_color="#061223" rotate="rotateZ(20deg)">
        <Cover className="cover" />
        <SectionImage src={moonImg} alt="moon" />
        <h3>My work</h3>
        <SectionLine bg_color="#DAE7EA" />
      </Section>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  position: fixed;
  width: 25rem;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  transform: ${(props) => props.open};
  transition: all 0.5s ease;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  .middle-section {
    margin: 0.5rem 0rem;
  }
`;

const Section = styled.div`
  width: 100%;
  height: 33%;
  /* margin-bottom: 0.5rem; */
  background: ${(props) => props.bg_color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  cursor: pointer;

  .dark-title {
    color: black;
  }

  &:hover {
    img {
      transform: ${(props) => props.rotate};
      width: 50%;
    }
    .cover {
      opacity: 0.25;
    }
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: black;
  position: absolute;
  transition: all 1s ease-out;
`;

const SectionImage = styled.img`
  width: 60%;
  transition: all 0.5s ease-out;
`;

const SectionLine = styled.div`
  width: 50%;
  height: 0.5rem;
  background: ${(props) => props.bg_color};
  z-index: 100;
`;

export default Nav;
