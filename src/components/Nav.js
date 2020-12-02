//React Router
// import { Link } from "react-router-dom";
//Styled Components
import styled from "styled-components";

const Nav = ({ open }) => {
  return (
    <NavStyled open={open}>
      <h2>Hello La nav</h2>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  position: fixed;
  width: 20rem;
  height: 100%;
  top: 0;
  left: 0;
  background-color: lightblue;
  transform: ${(props) => props.open};
  transition: all 0.5s ease;
  opacity: 1;
`;

export default Nav;
