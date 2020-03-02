import React from "react";
import styled from "styled-components";
import { projectDisplayerStyle } from "./ProjectDisplayer.style";
import * as customHooks from "../../../utils/CustomHooks/CustomHooks";
import * as githubUtils from "../utils/GithubUtils";
import Loader from "../../UI/Loader/Loader";
import StarIcon from "../../UI/Icons/StarIcon";

const ProjectDisplayer = styled.div`
  ${projectDisplayerStyle}
`;

const projectDisplayer = ({ userName, repoName }) => {
  const githubFetchState = customHooks.useFetch(
    githubUtils.fetchRepo,
    userName,
    repoName
  );

  // const githubRepoLanguages = customHooks.useFetch(
  //   githubUtils.fetchRepoLanguages,
  //   userName,
  //   repoName
  // );

  if (githubFetchState.isLoading) {
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

  // if (!githubRepoLanguages.isLoading) {
  //   console.log(githubRepoLanguages);
  // }

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
              {/* {Object.keys(githubRepoLanguages.data).forEach(item => {
                console.log(item); // key
                console.log(githubRepoLanguages.data[item]); // value
              })} */}
            </div>
          </div>
        </div>
        <div className="project_description">
          <div>{githubFetchState.data.description}</div>
        </div>
      </a>
    </ProjectDisplayer>
  );
};

export default projectDisplayer;
