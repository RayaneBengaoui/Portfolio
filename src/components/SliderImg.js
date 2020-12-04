//Styled Components
import styled from "styled-components";

const SliderImg = ({
  src,
  id,
  setworkFocus,
  setProjectIndex,
  projectNumber,
}) => {
  const eventHandler = () => {
    setworkFocus(true);
    setProjectIndex(projectNumber);
  };
  return (
    <StyledImg
      onClick={() => eventHandler()}
      src={src}
      id={id}
      alt="slider img"
    />
  );
};

const StyledImg = styled.img`
  margin: 2rem 0rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  position: relative;
`;

export default SliderImg;
