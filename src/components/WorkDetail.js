//Styled Components
import styled from "styled-components";

const WorkDetail = () => {
  return (
    <WorkDetailStyled>
      <h1>HELLLLOOOO</h1>
    </WorkDetailStyled>
  );
};

const WorkDetailStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  background: black;
  z-index: 25;
`;

export default WorkDetail;
