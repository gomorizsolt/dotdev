import React from "react";
import styled from "styled-components";
import ProjectDisplayer from "./ProjectDisplayer/ProjectDisplayer";
import { useConfig } from "../../contexts/Config";
import { projectsStyle } from "./Projects.style";

const Projects = styled.div`
  ${projectsStyle}
`;

export default () => {
  const { github } = useConfig();

  function processEntry(entry) {
    const [org, repo] = entry.split("/");

    if (!org || !repo) {
      // eslint-disable-next-line no-console
      console.error("Missing organization or repository name.");

      return null;
    }

    return <ProjectDisplayer key={repo} org={org} repo={repo} />;
  }

  return (
    <Projects>
      <h2 className="title">Projects</h2>
      {github.repos.map(processEntry)}
    </Projects>
  );
};
