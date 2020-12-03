//Styled Components
import styled from "styled-components";

const SliderImg = ({ src, id }) => {
  return <StyledImg src={src} id={id} alt="slider img" />;
};

const StyledImg = styled.img`
  margin: 2rem 0rem;
  width: 100%;
  height: 100%;
`;

export default SliderImg;
