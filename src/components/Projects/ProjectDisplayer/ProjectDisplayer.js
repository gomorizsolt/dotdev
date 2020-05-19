import React from "react";
import styled from "styled-components";
import {
  projectDisplayerContainerStyle,
  languageTextsWrapperStyle,
  languageIconsWrapperStyle,
} from "./ProjectDisplayer.style";
import { useGitHub } from "../utils/GithubUtils";
import Loader from "../../UI/Loader/Loader";
import StarIcon from "../../UI/Icons/StarIcon";
import { useConfig } from "../../../contexts/Config";
import TechIconsDisplayer from "../../TechIconsDisplayer/TechIconsDisplayer";

const ProjectDisplayerContainer = styled.div`
  ${projectDisplayerContainerStyle}
`;

const LanguageTextsWrapper = styled.div`
  ${languageTextsWrapperStyle}
`;

const LanguageIconsWrapper = styled.div`
  ${languageIconsWrapperStyle}
`;

const ProjectDisplayer = ({ org, repo }) => {
  const { loading, languagesErr, repoInfoErr, languages, repoInfo } = useGitHub(
    org,
    repo
  );
  const { display } = useConfig();

  function renderLanguages() {
    if (languagesErr) {
      // eslint-disable-next-line no-console
      console.warn(
        `An error has occurred while loading the ${repo} Github project languages. Please try again later.`
      );

      return null;
    }

    if (display === "icon") {
      return (
        <LanguageIconsWrapper>
          <TechIconsDisplayer collection={languages} />
        </LanguageIconsWrapper>
      );
    }

    return (
      <LanguageTextsWrapper>
        {languages.map(language => {
          return <div key={language}>{language}</div>;
        })}
      </LanguageTextsWrapper>
    );
  }

  if (loading) {
    return (
      <ProjectDisplayerContainer>
        <Loader />
      </ProjectDisplayerContainer>
    );
  }

  if (repoInfoErr) {
    // eslint-disable-next-line no-console
    console.error(
      `An error has occurred while loading the '${repo}' Github project. Please try again later.`
    );

    return null;
  }

  return (
    <ProjectDisplayerContainer>
      <a
        className="repository_link"
        href={repoInfo.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project_header">
          <div className="project_title">
            <div className="repository_name">{repoInfo.name}</div>
            <div className="project_star">
              <StarIcon />
              {repoInfo.stars}
            </div>
          </div>
        </div>
        <div className="project_description">
          <div>{repoInfo.description}</div>
        </div>
        {renderLanguages()}
      </a>
    </ProjectDisplayerContainer>
  );
};

export default ProjectDisplayer;
