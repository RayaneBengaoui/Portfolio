import { Link } from "react-router-dom";
import styled from "styled-components";
import moutainImg from "../images/moutains.jpg";

const Homepage = () => {
  return (
    <HomepageStyled>
      <Title>
        Rayane <span>Bengaoui</span>
      </Title>
      <Link to="/work">Next page</Link>
    </HomepageStyled>
  );
};

const HomepageStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url(${moutainImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
`;

const Title = styled.h1`
  position: absolute;
  font-size: 100px;
  left: 30%;
  top: 20%;
  color: white;
`;

export default Homepage;
