//Styled Components
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const WorkDetail = ({ project, setworkFocus }) => {
  return (
    <WorkDetailStyled>
      <LeftContainer>
        <h5>{project.title}</h5>
        <img src={project.img} alt="project image" />
      </LeftContainer>
      <RightContainer>
        <Links>
          <ProjectLinks>
            <Github>
              <a target="_blank" href={project.github_url}>
                <FontAwesomeIcon
                  size="5x"
                  color="white"
                  icon={faGithubSquare}
                />
                <p>Github</p>
              </a>
            </Github>
            <LiveSite>
              <a target="_blank" href={project.livesite_url}>
                <FontAwesomeIcon size="5x" color="white" icon={faGlobe} />
                <p>Live site</p>
              </a>
            </LiveSite>
          </ProjectLinks>
          <ButtonStyled onClick={() => setworkFocus(false)}>Back</ButtonStyled>
        </Links>
        <ProjectDescription>
          <Description>{project.description}</Description>
        </ProjectDescription>
      </RightContainer>
    </WorkDetailStyled>
  );
};

const WorkDetailStyled = styled.div`
  position: absolute;
  /* bottom: 0; */
  width: 100%;
  height: 75%;
  background: black;
  z-index: 25;
  display: flex;
  padding: 4rem 7rem;
  gap: 3rem;
`;

const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  img {
    max-width: 100%;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
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
    background-color: #206a65;
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
`;
export default WorkDetail;
