//Styled Components
import styled from "styled-components";

const Hamburger = ({ navStatus, setNavStatus }) => {
  return (
    <HamburgerStyled
      open={navStatus ? true : false}
      onClick={() => setNavStatus(!navStatus)}
    >
      <HamburgerLine className="line_1" />
      <HamburgerLine className="line_2" />
      <HamburgerLine className="line_3" />
    </HamburgerStyled>
  );
};

const HamburgerStyled = styled.div`
  position: absolute;

  top: 5rem;
  right: 10rem;
  cursor: pointer;
  z-index: 100;

  transform-origin: 0px;

  div {
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transform-origin: left;
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transform-origin: left;
    }
  }
`;

const HamburgerLine = styled.div`
  height: 0.5rem;
  width: 4.2rem;
  background-color: white;
  margin-bottom: 1rem;
  transition: all 1s ease;
`;

export default Hamburger;
