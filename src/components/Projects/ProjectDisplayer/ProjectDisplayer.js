import React from "react";
import styled from "styled-components";
import {
  projectDisplayerStyle,
  repositoryLanguagesStyle,
} from "./ProjectDisplayer.style";
import * as customHooks from "../../../utils/CustomHooks/CustomHooks";
import * as githubUtils from "../utils/GithubUtils";
import Loader from "../../UI/Loader/Loader";
import StarIcon from "../../UI/Icons/StarIcon";

const ProjectDisplayer = styled.div`
  ${projectDisplayerStyle}
`;
const RepositoryLanguages = styled.div`
  ${repositoryLanguagesStyle}
`;

const projectDisplayer = ({ userName, repoName, languageThreshold }) => {
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

  if (!githubRepoLanguages.isLoading) {
    let sum = 0;

    Object.keys(githubRepoLanguages.data).forEach(item => {
      // console.log(item); // key
      // console.log(githubRepoLanguages.data[item]); // value
      sum += githubRepoLanguages.data[item];
    });

    githubRepoLanguages.sum = sum;
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
        <RepositoryLanguages>
          {Object.keys(githubRepoLanguages.data).map(item => {
            if (
              githubRepoLanguages.data[item] / githubRepoLanguages.sum >
              (languageThreshold || 10) / 100
            ) {
              return <div key={item}>{item}</div>;
            }
            return null;
          })}
        </RepositoryLanguages>
      </a>
    </ProjectDisplayer>
  );
};

export default projectDisplayer;
