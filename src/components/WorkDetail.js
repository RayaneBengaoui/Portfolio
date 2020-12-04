//Styled Components
import styled from "styled-components";

const WorkDetail = ({ project, setworkFocus }) => {
  return (
    <WorkDetailStyled>
      <div className="left-container">
        <h5>{project.title}</h5>
        <img src={project.img} alt="project image" />
      </div>
      <div className="right-container">
        <div className="links">
          <div className="project-links">
            <div className="github">
              <a href={project.github_url}>
                <img src="" alt="" />
                <p>Github</p>
              </a>
            </div>
            <div className="live-site">
              <a href={project.livesite_url}>
                <img src="" alt="" />
                <p>Live site</p>
              </a>
            </div>
          </div>
          <button onClick={() => setworkFocus(false)}>Exit</button>
        </div>
        <div className="project-description">
          <div className="description">{}project.description</div>
        </div>
      </div>
    </WorkDetailStyled>
  );
};

const WorkDetailStyled = styled.div`
  position: absolute;
  /* bottom: 0; */
  width: 100%;
  height: 80%;
  background: black;
  z-index: 25;
`;

export default WorkDetail;
