export const getUserGitHubProjectDetails = (userName, repositoryName) => {
  const url = `https://api.github.com/repos/${userName}/${repositoryName}`;

  return fetch(url, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  }).then(fetchedProjectDetails => fetchedProjectDetails.json());
};

export const getOrgGitHubProjectDetails = userName => {
  const url = `https://api.github.com/users/${userName}/repos`;

  return fetch(url, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  }).then(fetchedProjectDetails => fetchedProjectDetails.json());
};
