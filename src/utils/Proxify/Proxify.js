import Url from "url-parse";

export default (proxy, url) => {
  const proxifiedUrl = new Url(proxy);

  proxifiedUrl.set("pathname", url);

  return proxifiedUrl.toString();
};
