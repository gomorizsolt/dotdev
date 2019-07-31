import React from "react";
import styled from "styled-components";
import Loader from "../../UI/Loader/Loader";
import * as customHooks from "../../../utils/CustomHooks/CustomHooks";
import * as GithubUtils from "../../../utils/GithubUtils/GithubUtils";
import * as javaScriptUtils from "../../../utils/JavaScriptUtils/JavaScriptUtils";
import { projectDisplayerStyle } from "./ProjectDisplayer.style";

const ProjectDisplayer = styled.div`
  ${projectDisplayerStyle}
`;

const projectDisplayer = ({ userName, repositoryName }) => {
  const githubFetchState =
    Array.isArray(repositoryName) && repositoryName.length < 1
      ? customHooks.useGenericFetch(GithubUtils.getAllGitHubProjectDetails, userName)
      : customHooks.useGenericFetch(GithubUtils.getGitHubProjectDetails, userName, repositoryName);

  if (githubFetchState.isLoading) {
    return <Loader />;
  }

  if (githubFetchState.err) {
    const errorMessage =
      "An error has occurred while loading the Github projects. Please try again later.";

    return <div>{errorMessage}</div>;
  }

  return (
    <ProjectDisplayer>
      {javaScriptUtils.isDefined(githubFetchState.data) && (
        <a
          className="repository_link"
          href={githubFetchState.data.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="user_avatar"
            src={githubFetchState.data.owner.avatar_url}
            alt={githubFetchState.data.name}
          />
          <div className="repository_name">{githubFetchState.data.name}</div>
          {githubFetchState.data.stargazers_count}
          <div>{githubFetchState.data.html_url}</div>
        </a>
      )}
    </ProjectDisplayer>
  );
};

export default projectDisplayer;
