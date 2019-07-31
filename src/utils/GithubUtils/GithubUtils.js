export const getGitHubProjectDetails = (userName, repositoryName) => {
  const url = `https://api.github.com/repos/${userName}/${repositoryName}`;

  return fetch(url, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  }).then(fetchedProjectDetails => fetchedProjectDetails.json());
};

export const getAllGitHubProjectDetails = userName => {
  const url = `https://api.github.com/users/${userName}/repos`;

  return fetch(url, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  }).then(fetchedProjectDetails => fetchedProjectDetails.json());
};
