//Styled Components
import styled from "styled-components";

const Hamburger = ({ navStatus, setNavStatus }) => {
  return (
    <HamburgerStyled onClick={() => setNavStatus(!navStatus)}>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerStyled>
  );
};

const HamburgerStyled = styled.div`
  position: absolute;
  top: 5rem;
  right: 10rem;
  cursor: pointer;
  z-index: 100;
`;

const HamburgerLine = styled.div`
  height: 0.5rem;
  width: 6rem;
  background-color: white;
  margin-bottom: 1rem;
`;

export default Hamburger;
