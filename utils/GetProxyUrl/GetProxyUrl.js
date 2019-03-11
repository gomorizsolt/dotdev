// TODO: how to handle environment variables in Next.js?
// Extend with another getter later that returns the corresponding url in the case of GitLab.

const getProxyUrl = userName => `https://c-hive-proxy.herokuapp.com/https://github.com/users/${userName}/contributions`;

export default getProxyUrl;
