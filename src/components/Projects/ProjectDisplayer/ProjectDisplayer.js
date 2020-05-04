import React from "react";
import styled from "styled-components";
import {
  projectDisplayerStyle,
  errorContainerStyle,
  languageTextsWrapperStyle,
  languageIconsWrapperStyle,
} from "./ProjectDisplayer.style";
import { useGitHub } from "../utils/GithubUtils";
import Loader from "../../UI/Loader/Loader";
import StarIcon from "../../UI/Icons/StarIcon";
import { useConfig } from "../../../contexts/Config";
import TechIconsDisplayer from "../../TechIconsDisplayer/TechIconsDisplayer";

const ProjectDisplayer = styled.div`
  ${projectDisplayerStyle}
`;

const ErrorContainer = styled.div`
  ${errorContainerStyle}
`;

const LanguageTextsWrapper = styled.div`
  ${languageTextsWrapperStyle}
`;

const LanguageIconsWrapper = styled.div`
  ${languageIconsWrapperStyle}
`;

export default ({ userName, repoName }) => {
  const { loading, languagesErr, repoInfoErr, languages, repoInfo } = useGitHub(
    userName,
    repoName
  );
  const { display } = useConfig();

  if (loading) {
    return (
      <ProjectDisplayer>
        <Loader />
      </ProjectDisplayer>
    );
  }

  if (repoInfoErr) {
    const errorMessage = `An error has occurred while loading the ${repoName} Github project. Please try again later.`;

    return <ErrorContainer>{errorMessage}</ErrorContainer>;
  }

  if (languagesErr) {
    // eslint-disable-next-line no-console
    console.warn(
      `An error has occurred while loading the ${repoName} Github project languages. Please try again later.`
    );
  }

  function renderLanguages() {
    if (languages && display === "icon") {
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

  return (
    <ProjectDisplayer>
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
    </ProjectDisplayer>
  );
};
