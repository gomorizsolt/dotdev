// TODO: how to handle environment variables in Next.js?
const getProxyUrl = username => `https://c-hive-proxy.herokuapp.com/https://github.com/users/${username}/contributions`;

export default getProxyUrl;
