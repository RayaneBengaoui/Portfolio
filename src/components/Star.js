//Styled Components
import styled from "styled-components";
import { motion } from "framer-motion";

const Star = ({ top, left, offsetX, offsetY, speed }) => {
  return (
    <StarStyled
      top={top}
      left={left}
      style={{
        transform: `translate( ${offsetX * speed}px, ${offsetY * speed}px)`,
      }}
    ></StarStyled>
  );
};

const StarStyled = styled(motion.div)`
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.translate};
`;

export default Star;
