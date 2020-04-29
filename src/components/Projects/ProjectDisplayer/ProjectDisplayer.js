import React from "react";
import styled from "styled-components";
import {
  projectDisplayerStyle,
  errorContainerStyle,
  languageTextsWrapperStyle,
  languageIconsWrapperStyle,
} from "./ProjectDisplayer.style";
import * as githubUtils from "../utils/GithubUtils";
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
  const { display } = useConfig();
  const {
    githubFetchState,
    githubRepoLanguages,
    repoLanguages,
  } = githubUtils.useRepoLanguages(userName, repoName);

  if (githubFetchState.isLoading || githubRepoLanguages.isLoading) {
    return (
      <ProjectDisplayer>
        <Loader />
      </ProjectDisplayer>
    );
  }

  if (githubFetchState.err) {
    const errorMessage = `An error has occurred while loading the ${repoName} Github project. Please try again later.`;

    return <ErrorContainer>{errorMessage}</ErrorContainer>;
  }

  if (githubRepoLanguages.err) {
    /* eslint-disable-next-line no-console */
    console.warn(
      `An error has occurred while loading the ${repoName} Github project languages. Please try again later.`
    );
  }

  function renderLanguages() {
    if (repoLanguages && display === "icon") {
      return (
        <LanguageIconsWrapper>
          <TechIconsDisplayer technologies={repoLanguages} />
        </LanguageIconsWrapper>
      );
    }

    return (
      <LanguageTextsWrapper>
        {repoLanguages.map(language => {
          return <div key={language}>{language}</div>;
        })}
      </LanguageTextsWrapper>
    );
  }

  return (
    <ProjectDisplayer>
      <a
        className="repository_link"
        href={githubFetchState.data.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project_header">
          <div className="project_title">
            <div className="repository_name">{githubFetchState.data.name}</div>
            <div className="project_star">
              <StarIcon />
              {githubFetchState.data.stargazers_count}
            </div>
          </div>
        </div>
        <div className="project_description">
          <div>{githubFetchState.data.description}</div>
        </div>
        {renderLanguages()}
      </a>
    </ProjectDisplayer>
  );
};
