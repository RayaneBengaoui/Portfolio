import { Link } from "react-router-dom";
import styled from "styled-components";
import moutainImg from "../images/moutains-only-bg.png";

const Homepage = () => {
  return (
    <HomepageStyled>
      <MoutainBg src={moutainImg} alt="" />
      <Rond />
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
  /* background-image: url(${moutainImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute; */
  background: linear-gradient(180deg, #0f4b5d 0%, #196172 100%);
  z-index: -2;
`;

const Title = styled.h1`
  position: absolute;
  font-size: 100px;
  left: 30%;
  top: 20%;
  color: white;
`;

const MoutainBg = styled.img`
  position: absolute;
  bottom: -20%;
  z-index: 5;
`;
const Rond = styled.div`
  position: absolute;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background: lightcoral;
  top: 10%;
  left: 50%;
  z-index: 0;
`;

export default Homepage;
