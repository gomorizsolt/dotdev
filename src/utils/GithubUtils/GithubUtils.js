export const getUserGitHubProjectDetails = (userName, repositoryName) => {
  const url = `https://api.github.com/repos/${userName}/${repositoryName}`;

  return fetch(url, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  }).then(fetchedProjectDetails => fetchedProjectDetails.json());
};

export const getAllOrgGitHubRepos = userName => {
  const url = `https://api.github.com/orgs/${userName}/repos`;

  return fetch(url, {
    headers: {
      Accept: "application/vnd.github.baptiste-preview+json",
    },
  }).then(fetchedProjectDetails => fetchedProjectDetails.json());
};

export const getGitHubRepoDetails = (userName, repositoryName) => {
  const url = `https://api.github.com/repos/${userName}/${repositoryName}`;

  return fetch(url, {
    headers: {
      Accept: "application/vnd.github.baptiste-preview+json",
    },
  }).then(fetchedProjectDetails => fetchedProjectDetails.json());
};
