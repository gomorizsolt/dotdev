import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  projectDisplayerStyle,
  repositoryLanguagesStyle,
  languageBadgesIconsContainerStyle,
} from "./ProjectDisplayer.style";
import * as customHooks from "../../../utils/CustomHooks/CustomHooks";
import * as githubUtils from "../utils/GithubUtils";
import Loader from "../../UI/Loader/Loader";
import StarIcon from "../../UI/Icons/StarIcon";
import settings from "../../../../settings/settings.json";
import IconDisplayer from "../../UI/Icons/IconDisplayer";

const ProjectDisplayer = styled.div`
  ${projectDisplayerStyle}
`;
const RepositoryLanguages = styled.div`
  ${repositoryLanguagesStyle}
`;

const LanguageBadgesIconsContainer = styled.div`
  ${languageBadgesIconsContainerStyle}
`;

const projectDisplayer = ({ userName, repoName }) => {
  const [languageBadges, setLanguageBadges] = useState([]);

  const githubFetchState = customHooks.useFetch(
    githubUtils.fetchRepo,
    userName,
    repoName
  );

  const githubRepoLanguages = customHooks.useFetch(
    githubUtils.fetchRepoLanguages,
    userName,
    repoName
  );

  useEffect(() => {
    if (!githubRepoLanguages.isLoading && !githubRepoLanguages.err) {
      const sumOfNumberOfBytesOfLanguages = Object.values(
        githubRepoLanguages.data
      ).reduce((x, y) => x + y, 0);

      Object.keys(githubRepoLanguages.data).forEach(language => {
        const currentNumberOfBytes = githubRepoLanguages.data[language];
        const threshold = settings.github.languageThreshold || 10;

        if (
          (currentNumberOfBytes / sumOfNumberOfBytesOfLanguages) * 100 >
          threshold
        ) {
          setLanguageBadges(prevlanguageBadges => [
            ...prevlanguageBadges,
            language,
          ]);
        }
      });
    }
  }, [githubRepoLanguages.isLoading, githubRepoLanguages.err]);

  if (githubFetchState.isLoading || githubRepoLanguages.isLoading) {
    return (
      <ProjectDisplayer>
        <Loader />
      </ProjectDisplayer>
    );
  }

  if (githubFetchState.err) {
    const errorMessage =
      "An error has occurred while loading the Github projects. Please try again later.";

    return <div>{errorMessage}</div>;
  }

  if (githubRepoLanguages.err) {
    /* eslint-disable-next-line no-console */
    console.warn(
      `An error has occurred while loading the Github project languages. Please try again later.`
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
        {languageBadges && settings.display === "icon" ? (
          <LanguageBadgesIconsContainer>
            {languageBadges.map(tech =>
              settings.technologyIcons[tech.toLowerCase()] ? (
                <IconDisplayer
                  key={tech.toLowerCase()}
                  name={settings.technologyIcons[tech.toLowerCase()].name}
                  src={settings.technologyIcons[tech.toLowerCase()].icon}
                />
              ) : (
                /* eslint-disable-next-line no-console */
                console.warn(
                  `There is no icon path specified in the settings for ${tech} technology`
                )
              )
            )}
          </LanguageBadgesIconsContainer>
        ) : (
          <RepositoryLanguages>
            {languageBadges.map(language => {
              return <div key={language}>{language}</div>;
            })}
          </RepositoryLanguages>
        )}
      </a>
    </ProjectDisplayer>
  );
};

export default projectDisplayer;
