import React from "react";
import styled from "styled-components";
import ProjectDisplayer from "./ProjectDisplayer/ProjectDisplayer";
import config from "../../../config/config.yml";
import { projectsStyle } from "./Projects.style";

const Projects = styled.div`
  ${projectsStyle}
`;

const projects = () => {
  return (
    <Projects>
      <h2 className="title">Projects</h2>

      {config.github.repos.map(repo => (
        <ProjectDisplayer
          key={repo}
          userName={config.github.name}
          repoName={repo}
        />
      ))}
    </Projects>
  );
};

export default projects;
