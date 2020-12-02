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
      <Section bg_color="#085567">
        <Cover />
        <SectionImage src={sunImg} alt="sun" />
        <h3>Homepage</h3>
        <SectionLine bg_color="#F3B659" />
      </Section>
      <Section className="middle-section" bg_color="#88B3C4">
        <Cover />
        <SectionImage src={sunLightImg} alt="sun light" />
        <h3 className="dark-title">About me</h3>
        <SectionLine bg_color="#D9D2C3" />
      </Section>
      <Section bg_color="#061223">
        <Cover />
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

  .dark-title {
    color: black;
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: black;
  position: absolute;
`;

const SectionImage = styled.img`
  width: 60%;
`;

const SectionLine = styled.div`
  width: 50%;
  height: 0.5rem;
  background: ${(props) => props.bg_color};
`;

export default Nav;
