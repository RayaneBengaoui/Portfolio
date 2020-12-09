//Styled Components
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { workdetailAnim } from "../animation";

const WorkDetail = ({ project, setworkFocus }) => {
  return (
    <WorkDetailStyled
      variants={workdetailAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <LeftContainer>
        <h5>{project.title}</h5>
        <img src={project.img} alt="project" />
      </LeftContainer>
      <RightContainer>
        <Links>
          <ProjectLinks>
            <Github>
              <a target="_blank" rel="noreferrer" href={project.github_url}>
                <FontIcon
                  className="font-icon"
                  size="5x"
                  color="white"
                  icon={faGithubSquare}
                  hover={project.color}
                />
                <p>Github</p>
              </a>
            </Github>
            <LiveSite>
              <a target="_blank" rel="noreferrer" href={project.livesite_url}>
                <FontIcon
                  className="font-icon"
                  size="5x"
                  color="white"
                  hover={project.color}
                  icon={faGlobe}
                />
                <p>Live site</p>
              </a>
            </LiveSite>
          </ProjectLinks>
          <ButtonStyled
            fade={project.color}
            onClick={() => setworkFocus(false)}
          >
            Back
          </ButtonStyled>
        </Links>
        <ProjectDescription>
          <Description>{project.description}</Description>
        </ProjectDescription>
      </RightContainer>
    </WorkDetailStyled>
  );
};

const WorkDetailStyled = styled(motion.div)`
  position: absolute;
  /* bottom: 0; */
  width: 100%;
  height: 75%;
  background: black;
  z-index: 25;
  display: flex;
  padding: 4rem 7rem;
  gap: 3rem;

  @media (max-width: 1550px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    height: 90%;
    bottom: 0;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1550px) {
    width: 100%;
    height: 50%;
    margin-bottom: 2rem;
    img {
      margin-top: 1rem;
    }
  }

  img {
    max-width: 100%;
  }
`;

const RightContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  @media (max-width: 1550px) {
    width: 100%;
    height: 50%;
  }
`;

const FontIcon = styled(FontAwesomeIcon)`
  transition: all 0.5s ease;

  &:hover {
    color: ${(props) => props.hover};
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 20%;
`;
const ProjectLinks = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
`;

const Github = styled.div`
  text-align: center;

  p {
    font-size: 1.5rem;
  }
`;

const LiveSite = styled.div`
  text-align: center;

  p {
    font-size: 1.5rem;
  }
`;

const ButtonStyled = styled.button`
  font-weight: bold;
  font-size: 2rem;
  font-family: inherit;
  padding: 1rem 3rem;

  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    /* background-color: #696969; */
    background: ${(props) => props.fade};
    color: white;
  }
`;

const ProjectDescription = styled.div`
  height: 80%;
`;

const Description = styled.div`
  font-size: 2rem;
  color: white;
  padding-top: 8rem;
  font-weight: 300;
  line-height: 2.8rem;
  letter-spacing: 0.15rem;
`;
export default WorkDetail;
