import config from "../../../config/config.yml";

const getProxyURL = url => {
  return `${config.proxyURL}/${url}`;
};

export default getProxyURL;
