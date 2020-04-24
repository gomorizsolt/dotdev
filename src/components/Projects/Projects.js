import React from "react";
import styled from "styled-components";
import ProjectDisplayer from "./ProjectDisplayer/ProjectDisplayer";
import { useConfig } from "../../contexts/Config";
import { projectsStyle } from "./Projects.style";

const Projects = styled.div`
  ${projectsStyle}
`;

export default () => {
  const config = useConfig();

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
