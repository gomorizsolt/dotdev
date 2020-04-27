import React from "react";
import styled from "styled-components";
import {
  projectDisplayerStyle,
  errorContainerStyle,
  languagesTextContainerStyle,
  languagesIconContainerStyle,
} from "./ProjectDisplayer.style";
import { useGitHub } from "../utils/GithubUtils";
import Loader from "../../UI/Loader/Loader";
import StarIcon from "../../UI/Icons/StarIcon";
import { useConfig } from "../../../contexts/Config";
import IconDisplayer from "../../UI/Icons/IconDisplayer";

const ProjectDisplayer = styled.div`
  ${projectDisplayerStyle}
`;

const ErrorContainer = styled.div`
  ${errorContainerStyle}
`;

const LanguagesTextContainer = styled.div`
  ${languagesTextContainerStyle}
`;

const LanguagesIconContainer = styled.div`
  ${languagesIconContainerStyle}
`;

export default ({ org, repo }) => {
  const { loading, languagesErr, repoInfoErr, languages, repoInfo } = useGitHub(
    org,
    repo
  );
  const config = useConfig();

  if (loading) {
    return (
      <ProjectDisplayer>
        <Loader />
      </ProjectDisplayer>
    );
  }

  if (repoInfoErr) {
    const errorMessage = `An error has occurred while loading the ${repo} Github project. Please try again later.`;

    return <ErrorContainer>{errorMessage}</ErrorContainer>;
  }

  if (languagesErr) {
    // eslint-disable-next-line no-console
    console.warn(
      `An error has occurred while loading the ${repo} Github project languages. Please try again later.`
    );
  }

  function renderLanguages() {
    if (languages && config.display === "icon") {
      return (
        <LanguagesIconContainer>
          {languages.map(language => {
            const icon = config.technologyIcons[language.toLowerCase()];

            return icon ? (
              <IconDisplayer
                key={language.toLowerCase()}
                name={icon.name}
                src={icon.icon}
              />
            ) : (
              [
                /* eslint-disable-next-line no-console */
                console.warn(
                  `There is no icon path specified in the settings for ${language}`
                ),
              ]
            );
          })}
        </LanguagesIconContainer>
      );
    }
    return (
      <LanguagesTextContainer>
        {languages.map(language => {
          return <div key={language}>{language}</div>;
        })}
      </LanguagesTextContainer>
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
