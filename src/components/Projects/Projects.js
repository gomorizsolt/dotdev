import React from "react";
import styled from "styled-components";
import ProjectDisplayer from "./ProjectDisplayer/ProjectDisplayer";
import { githubProjects } from "../../../settings/settings.json";
import { projectsStyle } from "./Projects.style";

const Projects = styled.div`
  ${projectsStyle}
`;

const projects = () => {
  return (
    <Projects>
      <h2 className="title">Projects</h2>
      {githubProjects.map(projectDetails => (
        <ProjectDisplayer
          key={projectDetails.repositoryName}
          userName={projectDetails.userName}
          repositoryName={projectDetails.repositoryName}
        />
      ))}
    </Projects>
  );
};

export default projects;
